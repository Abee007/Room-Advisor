import "./BedroomCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ImageRenderer from "../../ImageRenderer";
import thumbnail from "../../../static/dorm_room.jpg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { numberToAcronym } from "../../../utils/colleges";
import { roomColorCodes } from "../../../utils/colleges";
import noise from "../../../static/noise.svg";
import size from "../../../static/size.svg";

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
    if (e.target.className === "favorite-bedroom") return;
    this.props.handleActivateReview({ roomCode: this.props.room.roomCode });
  };

  render() {
    return (
      <div className="bedroom-card" onClick={this.activateReview}>
        <div className="favorite-bedroom" onClick={this.toggleFavorited}>
          {!this.state.favorited ? (
            <FaRegBookmark style={{ color: "#fff", fontSize: "25px" }} />
          ) : (
            <FaBookmark style={{ color: "#fff", fontSize: "25px" }} />
          )}
        </div>

        <ImageRenderer
          thumb={thumbnail}
          url={this.state.previewPicture}
          alt="room-view"
        />

        <div className="bedroom-title-container">
          <h5 className="bedroom-card-title">{this.props.room.roomCode}</h5>
          <p
            className="bedroom-badge"
            style={{
              background:
                roomColorCodes[(this.props.room.meta.noBeds - 1) % 8].color,
              color:
                roomColorCodes[(this.props.room.meta.noBeds - 1) % 8].tcolor,
              marginBottom: "0",
            }}
          >
            {numberToAcronym(this.props.room.meta.noBeds)}
          </p>
        </div>

        <div className="modal-quote-badge-container">
          <p className="bedroom-card-review-quotes">
            {" "}
            "Lorem ipsum dolor sit amet, consectetur"
          </p>
          <p className="bedroom-badge-gray" style={{ marginBottom: "0px" }}>
            {" "}
            <img className="badge-icon" src={noise} alt="noise" />{" "}
            {(Math.round(this.props.room.meta.noise * 10) / 10).toFixed(1)}{" "}
          </p>
          <p className="bedroom-badge-gray" style={{ marginBottom: "0px" }}>
            {" "}
            <img className="badge-icon" src={size} alt="size" />{" "}
            {(Math.round(this.props.room.meta.size * 10) / 10).toFixed(1)}{" "}
          </p>
        </div>
      </div>
    );
  }
}
