import "./BedroomCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import room from "../../../static/dorm_room.jpg";
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
    };
  }

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
      <div className="bedroom-card" onClick={this.activateReview}>
        {/* <img className="bedroom-card-photo" src={room} alt="room-view" /> */}

        <div className="bedroom-title-container bedroom-notify-badge rcorners1">
          <h5 className="bedroom-card-title"> {this.props.room.roomCode} </h5>
          <p
            className="suite-badge"
            style={{
              background: roomColorCodes[this.props.room.meta.noBeds - 1].color,
              color: roomColorCodes[this.props.room.meta.noBeds - 1].tcolor,
              marginBottom: "0",
            }}
          >
            {" "}
            {numberToAcronym(this.props.room.meta.noBeds)}{" "}
          </p>
        </div>
        {/*       
        <div className="title-container notify-badge rcorners1">
          <h5 className="card-title"> {this.props.room.roomCode} </h5>
          <p className="suite-badge" style={{
            background: roomColorCodes[0].color, 
            color:roomColorCodes[0].tcolor, 
            marginBottom:'0'
            }}> D31 </p>
        </div> */}

        {/* displaying room photo (--> to be carousel in the future) */}
        <img className="bedroom-card-photo" src={room} alt="room-view" />
        <div className="modal-icon-badge-container">
          <p className="bedroom-card-review-quotes">
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolores"
          </p>
          <p className="room-badge-gray" style={{ marginBottom: "0px" }}>
            {" "}
            <img className="badge-icon" src={noise} />{" "}
            {(Math.round(this.props.room.meta.noise * 10) / 10).toFixed(1)}{" "}
          </p>
          <p className="room-badge-gray" style={{ marginBottom: "0px" }}>
            {" "}
            <img className="badge-icon" src={size} />{" "}
            {(Math.round(this.props.room.meta.size * 10) / 10).toFixed(1)}{" "}
          </p>
        </div>

        <h1 className="card-subtext">
          {this.props.room.meta.roomReviews.length} reviews
        </h1>

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

// -------------------------

// import noise from "../../../static/noise.svg"
// import size from "../../../static/size.svg"
// import BedroomModal from "./BedroomModal";
// import {roomColorCodes} from "../../../utils/colleges";
// import { BsDot } from "react-icons/bs";
// import "./BedroomCard.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { Component } from "react";
// import Badge from "react-bootstrap/Badge";
// import room from "../../../static/dorm_room.jpg";
// import { FaRegBookmark, FaBookmark } from "react-icons/fa";
// import { numberToAcronym } from "../../../utils/colleges";

// export default class BedroomCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favorited: this.props.room.meta.favorited,
//     };
//   }

//   // Look out of change of state of bedroom props
//   static getDerivedStateFromProps(props, state) {
//     if (props.room.meta.favorited !== state.favorited) {
//       //Change in props
//       return {
//         favorited: props.room.meta.favorited,
//       };
//     }
//     return null; // No change to state
//   }

//   toggleFavorited = () => {
//     const favorited = !this.state.favorited;
//     this.props.handleFavorited({
//       roomCode: this.props.room.roomCode,
//       favorited: favorited,
//     });
//     this.setState({ favorited });
//   };

//   activateReview = (e) => {
//     // Don't activate review if you are trying to like a room
//     if (e.target.className === "favorite-room") return;
//     this.props.handleActivateReview({ roomCode: this.props.room.roomCode });
//   };

//   render() {
//     return (
//       <div className="card" onClick={this.activateReview}>
//         <img className="room-card-photo" src={room} alt="room-view" />

//         <div className="room-card-right-side col-md-7">

//         <div className="title-container notify-badge rcorners1">
//           <h5 className="card-title"> {this.props.room.roomCode} </h5>
//           <p className="suite-badge" style={{
//             background: roomColorCodes[(this.state.room.noBeds)-1].color,
//             color:roomColorCodes[(this.state.room.noBeds)-1].tcolor,
//             marginBottom:'0'
//             }}> {numberToAcronym(this.state.room.noBeds)} </p>
//         </div>

//         {/* displaying room photo (--> to be carousel in the future) */}
//         <img className="card-photo" src={room} alt="room-view" />

//           {/* room size, noise, and size tags */}
//           <div className="room-card-badge-container">
//             <Badge pill bg="primary">
//               {numberToAcronym(this.props.room.meta.noBeds)}
//             </Badge>
//             <Badge pill bg="secondary">
//               Noise:{" "}
//               {(Math.round(this.props.room.meta.noise * 10) / 10).toFixed(1)}
//             </Badge>
//             <Badge pill bg="info">
//               Size:{" "}
//               {(Math.round(this.props.room.meta.size * 10) / 10).toFixed(1)}
//             </Badge>
//           </div>

//           <p className="room-card-review-quotes"> "It's tinyyyyyyy and..."</p>
//           <h1 className="card-subtext">
//             {this.props.room.meta.roomReviews.length} reviews
//           </h1>
//         </div>
//         <div className="favorite-room" onClick={this.toggleFavorited}>
//           {!this.state.favorited ? (
//             <FaRegBookmark style={{ color: "#0053c5", fontSize: "25px" }} />
//           ) : (
//             <FaBookmark style={{ color: "#0053c5", fontSize: "25px" }} />
//           )}
//         </div>
//       </div>
//     );
//   }
// }
