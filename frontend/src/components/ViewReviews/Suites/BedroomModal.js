import "./BedroomModal.css";
import React, { Component } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import room from "../../../static/dorm_room.jpg";
// import TabBar from './TabBar'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { numberToAcronym } from "../../../utils/colleges";
import { IoIosArrowBack } from "react-icons/io";
import { roomColorCodes } from "../../../utils/colleges";
import noise from "../../../static/noise.svg";
import size from "../../../static/size.svg";

export default class BedroomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: this.props.room.meta.favorited,
      roomStats: this.computeRoomstats(this.props.room),
    };
  }

  computeRoomNoiseSize = (reviews) => {
    if (reviews.length === 0) {
      //If no reviews have been give, return median number
      return { noise: -1, size: -1 };
    }

    var noise = 0,
      size = 0;
    for (const review of reviews) {
      noise += review.noise;
      size += review.size;
    }

    noise = noise / reviews.length;
    size = size / reviews.length;
    return { noise: noise, size: size };
  };

  computeRoomstats = (room) => {
    const noiseAndSize = this.computeRoomNoiseSize(room.meta.roomReviews);
    if (noiseAndSize.noise > -1) {
      return { noise: noiseAndSize.noise, size: noiseAndSize.size };
    }
    return { noise: 2.5, size: 2.5 };
  };

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
            <p
              className="suite-modal-header-badge"
              pill
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

            <div className="modal-icon-badge-container">
              <p className="modal-badge-gray" style={{ marginBottom: "0px" }}>
                {" "}
                <img className="badge-icon" src={noise} alt="noise" />{" "}
                {(Math.round(this.state.roomStats.noise * 10) / 10).toFixed(1)}{" "}
              </p>
              <p className="modal-badge-gray" style={{ marginBottom: "0px" }}>
                {" "}
                <img className="badge-icon" src={size} alt="size" />{" "}
                {(Math.round(this.state.roomStats.size * 10) / 10).toFixed(1)}{" "}
              </p>
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
            {this.props.room.meta.pictures.length === 0 ? (
              <Carousel showArrows={true}>
                <div>
                  <img className="card-photo" src={room} alt="room-view" />
                </div>
              </Carousel>
            ) : (
              <>
                <Carousel showArrows={true}>
                  {this.props.room.meta.pictures.map((pic) => (
                    <div id={pic.name}>
                      <img className="card-photo" src={pic} alt="room-view" />
                    </div>
                  ))}
                </Carousel>
              </>
            )}
          </div>

          <div className="col-md-7 bedroom-modal-body-right">
            <h2 className="bedroom-modal-subtitle">Reviews</h2>

            {/* TabBar for toggleing views between the reviews to the two different prompts (Recommend? and Strenths/Weaknesses) */}
            {/* <TabBar /> */}
          </div>
        </div>
      </div>
    );
  }
}
