import "./BedroomCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import ImageRenderer from "../../ImageRenderer";
import thumbnail from "../../../static/dorm_room.jpg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { numberToAcronym } from "../../../utils/colleges";

export default class BedroomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: this.props.room.meta.favorited,
      previewPicture: this.selectPreviewPicture(),
    };
  }

  selectPreviewPicture = () => {
    // Select random picture
    return this.props.room.meta.pictures[
      Math.floor(Math.random() * this.props.room.meta.pictures.length)
    ];
  };

  // Look out of change of state of bedroom props
  static getDerivedStateFromProps(props, state) {
    if (props.room.meta.favorited !== state.favorited) {
      //Change in props
      return {
        favorited: props.room.meta.favorited,
      };
    }
    return null; // No change to state
  }

  toggleFavorited = () => {
    const favorited = !this.state.favorited;
    this.props.handleFavorited({
      roomCode: this.props.room.roomCode,
      favorited: favorited,
    });
    this.setState({ favorited });
  };

  activateReview = (e) => {
    // Don't activate review if you are trying to like a room
    if (e.target.className === "favorite-room") return;
    this.props.handleActivateReview({ roomCode: this.props.room.roomCode });
  };

  render() {
    return (
      <div className="card" onClick={this.activateReview}>
        <ImageRenderer
          thumb={thumbnail}
          url={this.state.previewPicture}
          width={"100"}
          alt="room-view"
        />
        {/* <div className="room-card-photo-container col-md-5">
          <img
            className="room-card-photo"
            src={this.state.previewPicture}
            alt="room-view"
          />
        </div> */}

        <div className="room-card-right-side col-md-7">
          {/* room number and bookmark icon */}
          <div className="card-title-container">
            <h5 className="card-title">{this.props.room.roomCode}</h5>
          </div>

          {/* room size, noise, and size tags */}
          <div className="room-card-badge-container">
            <Badge pill bg="primary">
              {numberToAcronym(this.props.room.meta.noBeds)}
            </Badge>
            <Badge pill bg="secondary">
              Noise:{" "}
              {(Math.round(this.props.room.meta.noise * 10) / 10).toFixed(1)}
            </Badge>
            <Badge pill bg="info">
              Size:{" "}
              {(Math.round(this.props.room.meta.size * 10) / 10).toFixed(1)}
            </Badge>
          </div>

          <p className="room-card-review-quotes"> "It's tinyyyyyyy and..."</p>
          <h1 className="card-subtext">
            {this.props.room.meta.roomReviews.length} reviews
          </h1>
        </div>
        <div className="favorite-room" onClick={this.toggleFavorited}>
          {!this.state.favorited ? (
            <FaRegBookmark style={{ color: "#0053c5", fontSize: "25px" }} />
          ) : (
            <FaBookmark style={{ color: "#0053c5", fontSize: "25px" }} />
          )}
        </div>
      </div>
    );
  }
}
