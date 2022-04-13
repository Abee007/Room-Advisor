import "./BedroomModal.css";
import React, { Component } from "react";
// import { CSSTransition } from 'react-transition-group'
import Badge from "react-bootstrap/Badge";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import room from "../../../static/dorm_room.jpg";
// import TabBar from './TabBar'
import { numberToAcronym } from "../../../utils/colleges";
import { IoIosArrowBack } from "react-icons/io";

export default class BedroomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: this.props.room.meta.favorited,
    };
  }

  goBackToSuiteView = () => {
    this.props.handleActivateViewSuite();
  };

  toggleFavoritedRoom = () => {
    const favorited = !this.state.favorited;
    this.props.handleFavorited({
      roomCode: this.props.room.roomCode,
      favorited: favorited,
    });
    this.setState({ favorited });
  };

  render() {
    return (
      <div className="bedroom-modal">
        <div className="bedroom-modal-header">
          <div
            className={
              !this.props.isSingle
                ? "bedroom-modal-backarrow"
                : "bedroom-modal-backarrow zero-opacity"
            }
            onClick={this.goBackToSuiteView}
          >
            <IoIosArrowBack style={{ color: "#0053c5", fontSize: "30px" }} />
          </div>

          <h4 className="bedroom-modal-title">{this.props.title}</h4>
          <div
            className={
              !this.props.isSingle
                ? "bedroom-badge-container"
                : "bedroom-badge-container is-single"
            }
          >
            <div className="pill">
              <Badge pill bg="primary">
                {numberToAcronym(this.props.room.meta.noBeds)}
              </Badge>
            </div>
            <div className="pill">
              <Badge pill bg="secondary">
                Noise:{" "}
                {(Math.round(this.props.room.meta.noise * 10) / 10).toFixed(1)}
              </Badge>
            </div>
            <div className="pill">
              <Badge pill bg="info">
                {" "}
                Size:{" "}
                {(Math.round(this.props.room.meta.size * 10) / 10).toFixed(1)}
              </Badge>
            </div>
          </div>
          <div
            className={
              !this.props.isSingle
                ? "favorite-room-modal"
                : "favorite-room-modal fav-room-standalone"
            }
            onClick={this.toggleFavoritedRoom}
          >
            {!this.state.favorited ? (
              <FaRegBookmark style={{ color: "#0053c5", fontSize: "30px" }} />
            ) : (
              <FaBookmark style={{ color: "#0053c5", fontSize: "30px" }} />
            )}
          </div>
        </div>

        <div className="bedroom-modal-body">
          <div className="col-md-5">
            <img className="card-photo" src={room} alt="room-view" />
          </div>

          <div className="col-md-7 BedroomModal-body-right">
            <h2 className="BedroomModal-subtitle">Reviews</h2>

            {/* TabBar for toggleing views between the reviews to the two different prompts (Recommend? and Strenths/Weaknesses) */}
            {/* <TabBar /> */}
          </div>
        </div>
      </div>
    );
  }
}