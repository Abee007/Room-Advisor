import "./SuiteModal.css";
import React, { Component } from "react";
// import { CSSTransition } from 'react-transition-group'
import Badge from "react-bootstrap/Badge";
import BedroomCard from "./BedroomCard";
import { numberToAcronym } from "../../../utils/colleges";

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
              <Badge pill bg="primary">
                {numberToAcronym(this.props.suiteStats.noBeds)}
              </Badge>
            </div>
            <div className="pill">
              <Badge pill bg="secondary">
                Noise: {this.props.suiteStats.noise}{" "}
              </Badge>
            </div>
            <div className="pill">
              <Badge pill bg="info">
                {" "}
                Size: {this.props.suiteStats.size}{" "}
              </Badge>
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
