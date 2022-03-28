import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './SuiteModal2.css'
import size from '../../static/size.svg'
import noise from '../../static/noise.svg'
import back from '../../static/backArrow.svg'
import Badge from 'react-bootstrap/Badge'
import CloseModalButton from './CloseModalButton'
import { MdClose } from "react-icons/md";

const SuiteModal2 = ({ showModal, setShowModal }) => {  

  const closeModal = (event) => {
    if (event.target.id === "myModal") {
      event.preventDefault();
      setShowModal(false);
    }
  };

  return (
    <div className='background' id="myModal" onClick={closeModal}>
      <div className={(showModal ? 'modal-container-show' : 'modal-container-hide')} showModal={showModal}>
        <div>hi</div>
        <CloseModalButton>
          aria-label="Close modal"
          onClick={() => {
          setShowModal(!showModal)
          console.log('closebuttonclick')
          }}

        </CloseModalButton>
      </div>
    </div>
  );
};

export default SuiteModal2
// *********************

