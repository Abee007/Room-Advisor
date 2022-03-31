import "./SuiteCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import room from "../../../static/dorm_room.jpg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import ModalContainer from "../GeneralModal";
import { numberToAcronym } from "../../../utils/colleges";
import SuiteModal from "./SuiteModal";
import BedroomModal from "./BedroomModal";
import { BsDot } from "react-icons/bs";

export default class SuiteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.suite.suiteCode,
      favorited: this.props.suite.favorited,
      favoritedInside: this.props.suite.favoritedInside,
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
    this.props.handleFavoritedSuite({
      suiteCode: this.state.name,
      buildingName: this.props.suite.buildingName,
      favorited: favorited,
    });
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
      noBeds = 0,
      noReviews = 0;
    var reviews = [];
    for (const room of suite) {
      no++;
      noise += room.meta.noise;
      size += room.meta.size;
      noBeds += room.meta.noBeds;
      noReviews += room.meta.roomReviews.length;
      reviews = reviews.concat(room.meta.roomReviews);
    }
    // Round to 1dp
    noise = (Math.round((noise / no) * 10) / 10).toFixed(1);
    size = (Math.round((size / no) * 10) / 10).toFixed(1);

    // Select random review
    var previewReview = reviews[Math.floor(Math.random() * reviews.length)];
    const preview = previewReview.rec;

    return {
      noise: noise,
      size: size,
      noBeds: noBeds,
      noReviews: noReviews,
      previewReview: preview,
    };
  };

  activateModal = () => {
    this.setState({ showModal: true });
  };

  deactivateModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="suite-card">
        {/* displaying room photo (--> to be carousel in the future) */}
        <div className="col-md-5">
          <img className="card-photo" src={room} alt="room-view" />
        </div>

        {/* creates container for the right hand side of the card where the text and badges will go */}
        <div
          className="card-right-side-suite col-md-7"
          onClick={this.activateModal}
        >
          {/* room number and bookmark icon */}
          <div className="card-title-container">
            <h5 className="card-title">{this.props.suite.suiteCode}</h5>
          </div>

          {/* room size, noise, and size tags */}
          <div className="card-badge-container">
            <Badge pill bg="primary">
              {/* Single/Double/Triple etc */}
              {numberToAcronym(this.state.suiteStats.noBeds)}
            </Badge>{" "}
            <Badge pill bg="secondary">
              {/* Noise */}
              Noise: {this.state.suiteStats.noise}
            </Badge>{" "}
            <Badge pill bg="info">
              {/* RoomSize */}
              Size: {this.state.suiteStats.size}
            </Badge>{" "}
          </div>

          <p className="card-review-quotes">
            "{this.state.suiteStats.previewReview}"
          </p>
          <h1 className="card-subtext">
            {this.state.suiteStats.noReviews} reviews
          </h1>
        </div>
        <div className="favorite-suite" onClick={this.handleSuiteFavorited}>
          {!this.state.favorited ? (
            <FaRegBookmark style={{ color: "#0053c5", fontSize: "30px" }} />
          ) : (
            <FaBookmark style={{ color: "#0053c5", fontSize: "30px" }} />
          )}
          <div className="favorited-inside">
            {this.state.favoritedInside ? (
              <BsDot style={{ color: "#0053c5", fontSize: "30px" }} />
            ) : (
              ""
            )}
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
