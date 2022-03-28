import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './SuiteModal.css'
import size from '../../static/size.svg'
import noise from '../../static/noise.svg'
import back from '../../static/backArrow.svg'
import Badge from 'react-bootstrap/Badge'
import BedroomCard from './BedroomCard'
import CloseModalButton from './CloseModalButton'

const SuiteModal = props => {

  const [show, setShow] = useState(false)

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 20) {
      console.log('hello')
      props.onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    
    return function cleanup () {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
    
  }, [])

  function backHandler() {
    console.log("tutorial");
  }

  return ReactDOM.createPortal(

    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className='SuiteModal'>
        <div className='SuiteModal-content'>
          <div className='SuiteModal-header'>

            <div id='closeButton' onClick={console.log('backbutton clicked')}> <CloseModalButton/> </div>
            {/* <button className='badge-icon' src={back} onClick={props.onClose()} > </button> */}
            <h4 className='SuiteModal-title'>{props.title}</h4>
            
            <p className='suite-badge' style={{background: '#eee8f1', color:'#9372A7', marginBottom:'0'}}  > QUAD </p>
            
            <p className='room-badge-gray'> 
              <img className='badge-icon checked' src={noise} alt='bar' />
              <div class="bar-container">
                  <div class="bar-5"></div>
              </div>
              4.5 
            </p>

            <p className='room-badge-gray'> 

              <img className='badge-icon' src={size} alt='room photo' /> 
              <div class="bar-container">
                  <div class="bar-5"></div>
              </div>
              4.5 
            </p>

          </div>

          <div className='SuiteModal-card-container'>{props.children}
            <BedroomCard />
            <BedroomCard />
          </div>

          <div className='SuiteModal-footer' />

        </div>
      </div>
    </CSSTransition>,

    document.getElementById('root')
  )
}

export default SuiteModal
