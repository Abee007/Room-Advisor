import React, { Component } from "react";
import Nav from "../components/Nav";
import Results from "./ViewReviews/Results/Results";
import { codeToCollege } from "../utils/colleges";
import CardsContainer from "./ViewReviews/Suites/CardsContainer";
import { Suites } from "../utils/colleges";

// function ViewReviews({ props }) {
//   const [isLoading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   fetchItems();
//   // }, []);

//   // const [items, setItems] = useState([]);

//   // const fetchItems = async () => {
//   //   const data = await fetch(`${serverIp}/viewreviews`);
//   //   const items = await data.json();
//   //   setItems(items);
//   // };

//   if(isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Nav user={props.user} mode={"VERBOSE"} />
//       {/* <section>
//         {items.map((item) => (
//           <div key={item.name}>
//             <p>{item.name}</p>
//             <p>{item.msg}</p>
//           </div>
//         ))}
//       </section> */}
//     </div>
//   );
// }

// export default ViewReviews;

// TODO: HANDLE THE CHANGES TO THE REST OF THE SEARCHES
export default class ViewReviews extends Component {
  // initial setup
  constructor(props) {
    super(props);
    this.state = JSON.parse(
      window.localStorage.getItem("viewReviewsState")
    ) || {
      loading: false,
      favorites: this.props.user.meta.favorites,
      building: {
        value: codeToCollege(this.props.user.meta.college),
        label: codeToCollege(this.props.user.meta.college),
      },
      roomSizes: [
        { value: 1, label: "Single" },
        { value: 2, label: "Double" },
      ],
      searchItem: "",
      sortBy: { value: "ALPHA", label: "Sort by: Suite Name" },
      noRoomsFound: 7,
    };
    // Always set searchItem to empty
    this.state.searchItem = "";
  }

  setState(state) {
    window.localStorage.setItem("viewReviewsState", JSON.stringify(state));
    super.setState(state);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleModalOpen);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleModalOpen);
  }

  // Ensures that the body isn't scrollable whhen the modal is open
  handleModalOpen() {
    if (!document.querySelector(".modal")) {
      document.querySelector("body").style.overflow = "visible";
    } else {
      document.querySelector("body").style.overflow = "hidden";
    }
  }

  // Favorite the suites that have been favorited by the user
  initializeSuites = () => {
    var mySuites = Suites;
    for (var suite of mySuites) {
      for (const fav of this.state.favorites) {
        if (suite.suiteCode === fav.suiteCode) {
          // If we like a room within a suite, we don't want to like the entire suite
          // so only set suite to true if what we are handling is a suite ie no roomCode element
          if (fav.roomCode === undefined) {
            suite.favorited = true;
          } else {
            suite.favoritedInside = true;
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
    this.setState({ ...this.state, favorites });
  };

  handleBuildingChange = (e) => {
    const building = e;
    // update value
    return this.setState({ ...this.state, building, searchItem: "" });
  };

  handleRoomSizeChange = (e) => {
    const roomSizes = e;
    // update value
    return this.setState({ ...this.state, roomSizes, searchItem: "" });
  };

  handleSearchChange = (e) => {
    const searchItem = e;
    // update value
    return this.setState({ ...this.state, searchItem });
  };

  handleSortByChange = (e) => {
    const sortBy = e;
    // update value
    this.cardsContainer1.updateYourSort(sortBy);
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
        <Results
          noRooms={this.state.noRoomsFound}
          sortBy={this.state.sortBy}
          handleChange={this.handleSortByChange}
        />
        {/* <p>{this.state.building.value}</p>
        {this.state.roomSizes.map((size) => (
          <p>{size.value}</p>
        ))}
        <p>{this.state.searchItem}</p> */}
        <CardsContainer
          ref={(ip) => {
            this.cardsContainer1 = ip;
          }}
          suites={this.initializeSuites()}
          sort={this.state.sortBy}
          handleAddFavorited={this.handleAddFavorited}
          handleRemoveFavorited={this.handleRemoveFavorited}
        />
      </div>
    );
  }
}
