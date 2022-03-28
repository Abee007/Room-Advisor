import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'
import './SuiteCard.css'
import room from '../../static/dorm_room.jpg'
import size from '../../static/size.svg'
import noise from '../../static/noise.svg'
import bar from '../../static/score-bar.svg'
import { FaRegBookmark } from 'react-icons/fa'
import SuiteModal from './SuiteModal'

function SuiteCard () {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='card' onClick={openModal}>Open Modal</Button>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    >

      {/* displaying room photo (--> to be carousel in the future) */}
     
        <div className='title-container notify-badge rcorners1'>
            <h5 className='card-title '> D31</h5>
            <p className='suite-badge' style={{background: '#eee8f1', color:'#9372A7'}}  > QUAD </p>
        </div>
        <img className='card-photo' src={room} alt='room photo' />

        {/* room size, noise, and size tags */}
        <div className='card-badge-container'>
        
          <p className='room-badge' style={{marginBottom: '0px'}} > D13A </p>
          <p className='room-badge' style={{marginBottom: '0px'}} > D13B </p>
          <p className='room-badge' style={{marginBottom: '0px'}} > D13C </p>
          <p className='room-badge' style={{marginBottom: '0px'}} > + </p>

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

      {/* pop-up with the individual room cards that shows up when clicked on the card */}
      <SuiteModal
        title='D31' onClose={() => {
          console.log('hide here')
          console.log({show})
          setShow(false)
        }} show={show}
      />

    </div>
  )
}

export default SuiteCard
