import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './BedroomModal.css'
import Badge from 'react-bootstrap/Badge'
import BedroomCard from './BedroomCard'
import { FaRegBookmark } from 'react-icons/fa'
import ScrollContainer from './ScrollContainer'
import CarouselComponent from '../Carousel'
import room from '../../static/dorm_room.jpg'
import SuiteModal from './SuiteModal'
import TabBar from '../TabBar'

const BedroomModal = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      console.log('hello');
      props.onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup () {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className='BedroomModal' onClick={props.onClose}>

        {/* header */}
        <div className='BedroomModal-container' onClick={e => e.stopPropagation()}>
          <div className='BedroomModal-header'>
            <h4 className='BedroomModal-title'>{props.title}</h4>
            <div className='badge-container'> <Badge pill bg='primary'> Triple </Badge>{' '} </div>
            <div> <Badge pill bg='secondary'> Noise: 4.5 </Badge>{' '} </div>
            <div> <Badge pill bg='info'> Size: 3.4 </Badge>{' '} </div>
            <FaRegBookmark className="push-right" style={{color: '#0053c5', fontSize: '30px'}} />
          </div>

          <div className='BedroomModal-body'>
            <div className='col-md-5'>
                <img className='card-photo' src={room} alt="room photo"  />
                {/* <CarouselComponent/> */}
            </div>

            <div className='col-md-7 BedroomModal-body-right'>
                <h2 className='BedroomModal-subtitle'>Reviews</h2>
                <TabBar/>
                
            </div>
          </div>
   

          <div className='BedroomModal-footer'>
          </div>

        </div>
      </div>
    </CSSTransition>,
    document.getElementById('root')
  )
}

export default BedroomModal
