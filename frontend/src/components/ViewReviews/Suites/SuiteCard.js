import "./SuiteCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import ModalContainer from "../GeneralModal";
import ImageRenderer from "../../ImageRenderer";
import { numberToAcronym } from "../../../utils/colleges";
import SuiteModal from "./SuiteModal";
import BedroomModal from "./BedroomModal";
import { BsDot } from "react-icons/bs";
import { roomColorCodes } from "../../../utils/colleges";
import thumbnail from "../../../static/dorm_room.jpg";
import noise from "../../../static/noise.svg";
import size from "../../../static/size.svg";

export default class SuiteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.suite.suiteCode,
      favorited: this.props.suite.favorited,
      favoritedInside: this.props.suite.favoritedInside,
      showModal: false,
      showReviews: false,
      showReviewRoomInfo: undefined,
      suiteStats: this.computeSuiteStats(this.props.suite.suiteRooms),
    };
  }

  // Update state of favoritedInside state
  static getDerivedStateFromProps(props, state) {
    if (props.suite.favoritedInside !== state.favoritedInside) {
      //Change in props
      return {
        favoritedInside: props.suite.favoritedInside,
        favorited: props.suite.favorited,
      };
    }
    return null; // No change to state
  }

  //Takes in a room object and returns a Bedroom reviews modal for that room
  showReviewsFn = (room) => {
    return (
      <BedroomModal
        isSingle={false}
        title={room.roomCode}
        room={room}
        handleActivateViewSuite={this.viewSuiteRooms}
        handleFavorited={this.handleRoomFavorited}
      />
    );
  };

  viewSuiteRooms = () => {
    this.setState({ showReviews: false });
  };

  activateReview = (e) => {
    var showReviewRoomInfo = undefined;
    for (var room of this.props.suite.suiteRooms) {
      if (room.roomCode === e.roomCode) {
        showReviewRoomInfo = room;
        break;
      }
    }

    this.setState({ showReviews: true, showReviewRoomInfo });
  };

  handleSuiteFavorited = () => {
    const favorited = !this.state.favorited;
    var result = {
      suiteCode: this.state.name,
      buildingName: this.props.suite.buildingName,
      favorited: favorited,
    };

    // Handle case where suite is a standlone single
    if (this.props.suite.suiteRooms.length === 1) {
      const s = {
        roomCode: this.state.name,
      };
      result = Object.assign(s, result);
    }

    this.props.handleFavoritedSuite(result);
    this.setState({ favorited });
  };

  handleRoomFavorited = (e) => {
    //apend suite name to object
    const s = {
      suiteCode: this.state.name,
      buildingName: this.props.suite.buildingName,
    };
    const result = Object.assign(s, e);
    this.props.handleFavoritedRoom(result);
  };

  computeSuiteStats = (suite) => {
    var no = 0,
      noise = 0,
      size = 0,
      noBeds = 0;

    var roomNames = [];

    var pictures = [];
    for (const room of suite) {
      no++;
      noise += room.meta.noise;
      size += room.meta.size;
      noBeds += room.meta.noBeds;
      pictures = pictures.concat(room.meta.pictures);
      roomNames.push(room.roomCode);
    }

    // Round to 1dp
    noise = (Math.round((noise / no) * 10) / 10).toFixed(1);
    size = (Math.round((size / no) * 10) / 10).toFixed(1);

    // Select random picture
    const selectedPicture = pictures[Math.floor(Math.random() * pictures.length)];

    //Badges
    var badges = [];
    if(noBeds === 1) {
      badges.push('Standalone');
    } else {
      var count = 0;
      for(var rmName of roomNames) {
        if(count === 2) break;
        badges.push(rmName);
        count++;
      }
      if(roomNames.length > 2) {
        badges.push('+');
      }
    }

    return {
      badges: badges,
      noise: noise,
      size: size,
      noBeds: noBeds,
      previewPicture: selectedPicture,
    };
  };

  activateModal = (e) => {
    // You don't want to reopen the modal if you are trying to close a modal
    if (
      e.target.className === "modal" ||
      e.target.className === "favorite-suite" ||
      e.target.className === "favorited-inside"
    )
      return;

    this.setState({ showModal: true });
  };

  deactivateModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="suite-card" onClick={this.activateModal}>
        <div className="favorite-suite" onClick={this.handleSuiteFavorited}>
          {!this.state.favorited ? (
            <FaRegBookmark style={{ color: "#fff", fontSize: "30px" }} />
          ) : (
            <FaBookmark style={{ color: "#fff", fontSize: "30px" }} />
          )}
          <div className="favorited-inside">
            {this.state.favoritedInside ? (
              <BsDot style={{ color: "#fff", fontSize: "30px" }} />
            ) : (
              ""
            )}
          </div>
        </div>

        <ImageRenderer
          thumb={thumbnail}
          url={this.state.suiteStats.previewPicture}
          alt="suite-view"
        />

        <div className="card-title-container">
          <h5 className="suite-card-title">{this.props.suite.suiteCode}</h5>
          <p
            className="suite-badge"
            style={{
              background:
                roomColorCodes[(this.state.suiteStats.noBeds - 1) % 8].color,
              color: roomColorCodes[(this.state.suiteStats.noBeds - 1) % 8].tcolor,
              marginBottom: "0",
            }}
          >
            {numberToAcronym(this.state.suiteStats.noBeds)}
          </p>
        </div>

        <div className="suitecard-badge-container">
          {this.state.suiteStats.badges.map((badge) => (
            <p className="room-badge" style={{ marginBottom: "0px" }}>
              {badge}
            </p>
          ))}
          
          <div className="icon-badge-container">
            <p className="room-badge-gray" style={{ marginBottom: "0px" }}>
              <img className="badge-icon" src={noise} alt="noise" />
              {(Math.round(this.state.suiteStats.noise * 10) / 10).toFixed(1)}
            </p>
            <p className="room-badge-gray" style={{ marginBottom: "0px" }}>
              <img className="badge-icon" src={size} alt="size" />
              {(Math.round(this.state.suiteStats.size * 10) / 10).toFixed(1)}
            </p>
          </div>
        </div>

        {/* pop-up with the individual room cards that shows up when clicked on the card */}
        <ModalContainer
          handleClose={this.deactivateModal}
          isOpen={this.state.showModal}
        >
          {/* If we have a standalone single, show the reviews directly */}
          {this.props.suite.suiteRooms.length === 1 ? (
            <BedroomModal
              isSingle={true}
              title={this.props.suite.suiteRooms[0].roomCode}
              room={this.props.suite.suiteRooms[0]}
              handleActivateViewSuite={this.viewSuiteRooms}
              handleFavorited={this.handleRoomFavorited}
            />
          ) : (
            <>
              {!this.state.showReviews ? (
                <SuiteModal
                  title={this.props.suite.suiteCode}
                  suiteStats={this.state.suiteStats}
                  rooms={this.props.suite.suiteRooms}
                  handleFavorited={this.handleRoomFavorited}
                  handleActivateReview={this.activateReview}
                />
              ) : (
                this.showReviewsFn(this.state.showReviewRoomInfo)
              )}
            </>
          )}
        </ModalContainer>
      </div>
    );
  }
}
