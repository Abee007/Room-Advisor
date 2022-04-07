import React, { Component } from "react";
import Nav from "../components/Nav";
import Results from "../components/ViewReviews/Results/Results";
import { codeToCollege, collegesToCode } from "../utils/colleges";
import CardsContainer from "../components/ViewReviews/Suites/CardsContainer";
// import { Suites } from "../utils/colleges";
import { db } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

// TODO: HANDLE THE CHANGES TO THE REST OF THE SEARCHES
export default class ViewReviews extends Component {
  // initial setup
  constructor(props) {
    super(props);
    var defaultRoomSizes;
    if (this.props.user.meta.classYear === 1) {
      defaultRoomSizes = [
        { value: 4, label: "Quad" },
        { value: 6, label: "Sextet" },
        { value: 8, label: "8-Pack" },
      ];
    } else if (this.props.user.meta.classYear === 2) {
      defaultRoomSizes = [
        { value: 1, label: "Single" },
        { value: 2, label: "Double" },
        { value: 4, label: "Quad" },
      ];
    } else if (this.props.user.meta.classYear === 3) {
      defaultRoomSizes = [
        { value: 1, label: "Single" },
        { value: 2, label: "Double" },
        { value: 4, label: "Quad" },
      ];
    } else {
      defaultRoomSizes = [{ value: 1, label: "Single" }];
    }

    const defaultState = {
      loading: true,
      suites: [],
      allSuitesForSelectedCollege: [],
      favorites: this.props.user.favorites,
      oldBuildingState: {
        value: codeToCollege(this.props.user.meta.college),
        label: codeToCollege(this.props.user.meta.college),
      },
      building: {
        value: codeToCollege(this.props.user.meta.college),
        label: codeToCollege(this.props.user.meta.college),
      },
      roomSizes: defaultRoomSizes,
      searchItem: "",
      sortBy: { value: "ALPHA", label: "Sort by: Suite Name" },
    };

    if (!JSON.parse(window.localStorage.getItem("viewReviewsState"))) {
      this.state = defaultState;
    } else {
      var localState = JSON.parse(
        window.localStorage.getItem("viewReviewsState")
      );
      if (this.props.user.favorites !== localState.favorites) {
        localState.favorites = this.props.user.favorites;
      }
      this.state = localState;
    }

    // Always set searchItem to empty
    this.state.searchItem = "";

    // Create suite state
    this.state.suites = this.filterRoomSize(
      this.state.roomSizes,
      this.state.allSuitesForSelectedCollege
    );
    this.state.suites = this.addFavoriteSuites(this.state.suites);

    // No of suites found
    this.state.noRoomsFound = this.state.suites.length;
  }

  setState(state) {
    window.localStorage.setItem("viewReviewsState", JSON.stringify(state));
    super.setState(state);
  }

  makeSuites = (suites) => {
    var finalSuites = [];
    for (const suite of suites) {
      var madeSuite = {
        buildingName: suite.buildingName,
        suiteCode: suite.suiteCode,
        favorited: false,
        favoritedInside: false,
        suiteRooms: [],
      };
      for (var room of suite.suiteRoomNames) {
        madeSuite.suiteRooms.push(suite[room]);
      }
      finalSuites.push(madeSuite);
    }
    return finalSuites;
  };

  componentDidMount() {
    document.addEventListener("click", this.handleModalOpen);

    // Update suite info practice
    // const t = doc(db, "Suites/BF-A12")

    // updateDoc(t, {
    //     "A12A.meta.pictures": arrayUnion("Done")
    //   })

    const suiteRef = collection(db, "Suites");
    const q = query(
      suiteRef,
      where("buildingName", "==", collegesToCode(this.state.building.value))
    );
    var suiteData = [];
    getDocs(q).then((data) => {
      data.forEach((docs) => {
        suiteData.push(docs.data());
      });

      const finalSuites = this.makeSuites(suiteData);
      this.setState({
        ...this.state,
        allSuitesForSelectedCollege: finalSuites,
        loading: false,
      });
    });
  }

  componentDidUpdate() {
    // Handle building chagne here
    if (this.state.building === this.state.oldBuildingState) return;

    const suiteRef = collection(db, "Suites");
    const q = query(
      suiteRef,
      where("buildingName", "==", collegesToCode(this.state.building.value))
    );
    var suiteData = [];
    getDocs(q).then((data) => {
      data.forEach((docs) => {
        suiteData.push(docs.data());
      });

      const finalSuites = this.makeSuites(suiteData);
      var suites = this.filterRoomSize(this.state.roomSizes, finalSuites);
      suites = this.addFavoriteSuites(suites);
      // No of suites found
      const noRoomsFound = suites.length;

      this.setState({
        ...this.state,
        allSuitesForSelectedCollege: finalSuites,
        suites,
        noRoomsFound,
        searchItem: "",
        oldBuildingState: this.state.building,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleModalOpen);
    this.setState({ ...this.state, loading: true });
  }

  // Ensures that the body isn't scrollable whhen the modal is open
  handleModalOpen() {
    if (!document.querySelector(".modal")) {
      document.querySelector("body").style.removeProperty("overflow");
    } else {
      document.querySelector("body").style.overflow = "hidden";
    }
  }

  // Favorite the suites that have been favorited by the user
  addFavoriteSuites = (suites) => {
    var mySuites = suites;
    for (var suite of mySuites) {
      for (const fav of this.state.favorites) {
        if (suite.buildingName === fav.buildingName && suite.suiteCode === fav.suiteCode) {
          // If we like a room within a suite, we don't want to like the entire suite
          // so only set suite to true if what we are handling is a suite ie no roomCode element
          if (fav.roomCode === undefined) {
            suite.favorited = true;
          } else {
            suite.favoritedInside = true;
            // If the room is a standalone single, you still want to favorite the entire suite
            if (suite.suiteRooms.length === 1) {
              suite.favorited = true;
            }
            for (var room of suite.suiteRooms) {
              if (room.roomCode === fav.roomCode) {
                room.meta.favorited = true;
              }
            }
          }
          // Handle for standalone singles
          if (suite.suiteRooms.length === 1)
            suite.suiteRooms[0].favorited = true;
        }
      }
    }
    return mySuites;
  };

  // Adds favorited suite/room to user object
  handleAddFavorited = (e) => {
    var favorites = this.state.favorites;
    favorites.push(e);
    this.props.handleUserObject({
      object: e,
      favorites: favorites,
      remove: false,
    });
    this.setState({ ...this.state, favorites });
  };

  // Removes favorited suite/room from user object
  handleRemoveFavorited = (e) => {
    var favorites = this.state.favorites;
    var rmIdx = 0;
    if (e.roomCode === undefined) {
      // we are dealing with a suite
      for (var fav1 of favorites) {
        if (fav1.roomCode === undefined && fav1.suiteCode === e.suiteCode)
          break;
        rmIdx++;
      }
    } else {
      // we are dealing with a room
      for (var fav2 of favorites) {
        if (fav2.roomCode === e.roomCode && fav2.suiteCode === e.suiteCode)
          break;
        rmIdx++;
      }
    }

    favorites.splice(rmIdx, 1);
    this.props.handleUserObject({
      object: e,
      favorites: favorites,
      remove: true,
    });
    this.setState({ ...this.state, favorites });
  };

  getSuiteRoomSize = (suite) => {
    var noBeds = 0;
    for (const room of suite.suiteRooms) {
      noBeds += room.meta.noBeds;
    }
    return noBeds;
  };

  filterRoomSize = (e, suites) => {
    var mySuites = [];
    if (e.length === 0) {
      // if no roomSize filter, return all rooms
      mySuites = mySuites.concat(suites);
    } else {
      for (const suite of suites) {
        for (const fav of e) {
          // If suite size satisfies criteria for size filter and in the same college
          if (this.getSuiteRoomSize(suite) === fav.value) {
            mySuites.push(suite);
            break;
          }
        }
      }
    }
    return mySuites;
  };

  // searches for room within a suite based on a string given
  roomNameSearchWithinSuite = (name, suite) => {
    for (const room of suite.suiteRooms) {
      if (
        room.roomCode.toLowerCase() === name.toLowerCase() ||
        room.roomCode.includes(name.toLowerCase())
      )
        return true;
    }
    return false;
  };

  filterSearch = (e, suites) => {
    var mySuites = [];
    for (const suite of suites) {
      if (
        suite.suiteCode.toLowerCase() === e.toLowerCase() ||
        suite.suiteCode.toLowerCase().includes(e.toLowerCase()) ||
        this.roomNameSearchWithinSuite(e, suite)
      ) {
        mySuites.push(suite);
      }
    }
    return mySuites;
  };

  // IMPORTANT FILTERS!!

  handleBuildingChange = (e) => {
    //Set state to loading
    const building = e;

    // This is handled in the componentDidUpdate function
    return this.setState({ ...this.state, building, loading: true });
  };

  handleRoomSizeChange = (e) => {
    const roomSizes = e;
    // Then filter room sizes
    var suites = this.filterRoomSize(e, this.state.allSuitesForSelectedCollege);
    // Then favorite the suites
    suites = this.addFavoriteSuites(suites);
    // Update no rooms found
    const noRoomsFound = suites.length;

    // update value
    return this.setState({
      ...this.state,
      roomSizes,
      suites,
      noRoomsFound,
      searchItem: "",
    });
  };

  handleSearchChange = (e) => {
    const searchItem = e;
    var suites;
    //If a user searches for a blank string, they probably just wanna go back to where they were originally
    if (e === "") {
      suites = this.filterRoomSize(
        this.state.roomSizes,
        this.state.allSuitesForSelectedCollege
      );
    } else {
      // search by name
      suites = this.filterSearch(e, this.state.allSuitesForSelectedCollege);
    }

    // Then favorite the suites
    suites = this.addFavoriteSuites(suites);
    // Update no rooms found
    const noRoomsFound = suites.length;

    // update value
    return this.setState({ ...this.state, suites, noRoomsFound, searchItem });
  };

  handleSortByChange = (e) => {
    const sortBy = e;
    // update value: updating happens in the cards container
    return this.setState({ ...this.state, sortBy });
  };

  render() {
    return (
      <div>
        <Nav
          user={this.props.user}
          mode={"VERBOSE"}
          currState={this.state}
          handleBuildingChange={this.handleBuildingChange}
          handleRoomSizeChange={this.handleRoomSizeChange}
          handleSearchChange={this.handleSearchChange}
        />
        {this.state.loading ? (
          <div>Loading viewreviews...</div>
        ) : (
          <div>
            <Results
              noRooms={this.state.noRoomsFound}
              sortBy={this.state.sortBy}
              handleChange={this.handleSortByChange}
            />
            <CardsContainer
              suites={this.state.suites}
              sort={this.state.sortBy}
              handleAddFavorited={this.handleAddFavorited}
              handleRemoveFavorited={this.handleRemoveFavorited}
            />
          </div>
        )}
      </div>
    );
  }
}
