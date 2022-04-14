import "./SuiteModal.css";
import React, { Component } from "react";
// import { CSSTransition } from 'react-transition-group'
import Badge from "react-bootstrap/Badge";
import BedroomCard from "./BedroomCard";
import { numberToAcronym } from "../../../utils/colleges";
import { roomColorCodes } from "../../../utils/colleges";
import noise from "../../../static/noise.svg";
import size from "../../../static/size.svg";

export default class SuiteModal extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleFavorited = (e) => {
    this.props.handleFavorited(e);
  };

  activateReview = (e) => {
    this.props.handleActivateReview(e);
  };

  render() {
    return (
      <div className="suite-modal">
        <div className="suite-modal-header">
          <h4 className="suite-modal-title">{this.props.title}</h4>
          <div className="suite-badge-container">
            <div className="pill">
              <p
                className="suite-badge"
                pill
                style={{
                  background:
                    roomColorCodes[this.props.suiteStats.noBeds - 1].color,
                  color:
                    roomColorCodes[this.props.suiteStats.noBeds - 1].tcolor,
                  marginBottom: "0",
                }}
              >
                {numberToAcronym(this.props.suiteStats.noBeds)}
              </p>
            </div>

            <div className="modal-icon-badge-container">
              <p className="room-badge-gray" style={{ marginBottom: "0px" }}>
                {" "}
                <img className="badge-icon" src={noise} />{" "}
                {(Math.round(this.props.suiteStats.noise * 10) / 10).toFixed(1)}{" "}
              </p>
              <p className="room-badge-gray" style={{ marginBottom: "0px" }}>
                {" "}
                <img className="badge-icon" src={size} />{" "}
                {(Math.round(this.props.suiteStats.size * 10) / 10).toFixed(1)}{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="suite-modal-card-container">
          {this.props.rooms.map((room) => (
            <BedroomCard
              key={room.roomCode}
              room={room}
              handleFavorited={this.handleFavorited}
              handleActivateReview={this.activateReview}
            />
          ))}
        </div>
      </div>
    );
  }
}
// const SuiteModal = props => {
//   // const [show, setShow] = useState(false)
//   // const closeOnEscapeKeyDown = e => {
//   //   if ((e.charCode || e.keyCode) === 27) {
//   //     props.onClose()
//   //   }
//   // }
//   // const handleClose = () => setShow(false)
//   // const handleShow = () => setShow(true)

//   return (
//     <div>
//     <CSSTransition
//       in={props.show}
//       unmountOnExit
//       timeout={{ enter: 0, exit: 300 }}
//     >
//       <div className='SuiteModal'>
//         <div className='SuiteModal-content'>
//           <div className='SuiteModal-header'>

//             <h4 className='SuiteModal-title'>{props.title}</h4>
//             <div className='badge-container'> <Badge pill bg='primary'> Triple </Badge>{' '} </div>
//             <div> <Badge pill bg='secondary'> Noise: 4.5 </Badge>{' '} </div>
//             <div> <Badge pill bg='info'> Size: 3.4 </Badge>{' '} </div>

//           </div>

//           <div className='SuiteModal-card-container'>
//             <BedroomCard />
//             <BedroomCard />
//           </div>

//           <div className='SuiteModal-footer' />

//         </div>
//       </div>
//     </CSSTransition>
//     </div>
//   )
// }

// export default SuiteModal
