import './GeneralModal.css'
import React, { useEffect } from 'react'
import ReactPortal from './ReactPortal'
import { GrClose } from 'react-icons/gr'


export default function ModalContainer({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="modal">
        <div className="modal-content">
          <div onClick={handleClose} className="close-btn">
          <GrClose fontSize='25px' />
          </div>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};