import React, { useEffect}  from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './SuiteModal.css'
import Badge from 'react-bootstrap/Badge'
import BedroomCard from './BedroomCard'
import BedroomModal from './BedroomModal'
import ScrollContainer from './ScrollContainer'

const SuiteModal = props => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className='SuiteModal'>
        <div className='SuiteModal-content'>
          <div className='SuiteModal-header'>
            <h4 className='SuiteModal-title'>{props.title}</h4>
            <div className='badge-container'> <Badge pill bg='primary'> Triple </Badge>{' '} </div>
            <div> <Badge pill bg='secondary'> Noise: 4.5 </Badge>{' '} </div>
            <div> <Badge pill bg='info'> Size: 3.4 </Badge>{' '} </div>
            {/* <FaRegBookmark className="push-right" style={{color: '#0053c5', fontSize: '30px'}} /> */}
          </div>
          <div className='SuiteModal-card-container'>{props.children}
            <BedroomCard />
            <BedroomCard />
          </div>
          <div className='SuiteModal-footer'>

          </div>
        </div>
      </div>
    </CSSTransition>,
    
    document.getElementById('root')
  )
}

export default SuiteModal
