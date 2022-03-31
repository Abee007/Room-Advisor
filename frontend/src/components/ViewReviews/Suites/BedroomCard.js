import "./BedroomCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import room from "../../../static/dorm_room.jpg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { numberToAcronym } from "../../../utils/colleges";

export default class BedroomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
    };
  }

  // This persists the state of the liked rooms in the suitemodal and the reviews modal
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

  activateReview = () => {
    this.props.handleActivateReview({ roomCode: this.props.room.roomCode });
  };

  render() {
    return (
      <div className="card">
        <div className="room-card-photo-container col-md-5">
          <img className="room-card-photo" src={room} alt="room-view" />
        </div>

        <div
          className="room-card-right-side col-md-7"
          onClick={this.activateReview}
        >
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
              Noise: {this.props.room.meta.noise}
            </Badge>
            <Badge pill bg="info">
              Size: {this.props.room.meta.size}
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
