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
  // constructor(props) {
  //   super(props);
  // }

  goBackToSuiteView = () => {
    this.props.handleActivateViewSuite();
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
            onClick={this.toggleFavorited}
          >
            {!this.props.room.meta.favorited ? (
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

// const BedroomModal = props => {
//   const closeOnEscapeKeyDown = e => {
//     if ((e.charCode || e.keyCode) === 27) {
//       console.log('hello')
//       props.onClose()
//     }
//   }

//   useEffect(() => {
//     document.body.addEventListener('keydown', closeOnEscapeKeyDown)
//     return function cleanup () {
//       document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
//     }
//   }, [closeOnEscapeKeyDown])

//   return (
//     <div>
//       {props.name}
//     </div>
//   )

//   return ReactDOM.createPortal(
//     <CSSTransition
//       in={props.show}
//       unmountOnExit
//       timeout={{ enter: 0, exit: 300 }}
//     >
//       <div className='BedroomModal' onClick={props.onClose}>

//         <div className='BedroomModal-container' onClick={e => e.stopPropagation()}>

//           <div className='BedroomModal-header'>
//             {/* showing quick info such as the badges, room number, and bookmark icon in the header section */}
//             <h4 className='BedroomModal-title'>{props.title}</h4>
//             <div className='badge-container'> <Badge pill bg='primary'> Triple </Badge>{' '} </div>
//             <div> <Badge pill bg='secondary'> Noise: 4.5 </Badge>{' '} </div>
//             <div> <Badge pill bg='info'> Size: 3.4 </Badge>{' '} </div>
//             <FaRegBookmark className='push-right' style={{ color: '#0053c5', fontSize: '30px' }} />

//           </div>

//           <div className='BedroomModal-body'>

//             {/* displaying room photo (--> to be carousel in the future) */}
//             <div className='col-md-5'>
//               <img className='card-photo' src={room} alt='room photo' />
//               {/* <CarouselComponent/> */}
//             </div>

//             <div className='col-md-7 BedroomModal-body-right'>
//               <h2 className='BedroomModal-subtitle'>Reviews</h2>

//               {/* TabBar for toggleing views between the reviews to the two different prompts (Recommend? and Strenths/Weaknesses) */}
//               <TabBar />

//             </div>

//           </div>

//           <div className='BedroomModal-footer' />

//         </div>
//       </div>
//     </CSSTransition>,
//     document.getElementById('root')
//   )
// }

// export default BedroomModal
