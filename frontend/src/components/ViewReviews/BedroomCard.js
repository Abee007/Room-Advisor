import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'
import './BedroomCard.css'
import size from '../../static/size.svg'
import noise from '../../static/noise.svg'
import room from '../../static/dorm_room.jpg'
import reviewIcon from '../../static/review-icon.svg'
import { FaRegBookmark } from 'react-icons/fa'
import BedroomModal from './BedroomModal'

function BedroomCard () {
  const [show, setShow] = useState(false)
  return (

    <div className='bedroom-card' 
        onClick={() => {
        console.log('show here')
        setShow(true)
      }}>

        <div className='bedroom-title-container bedroom-notify-badge rcorners1'>
            <h5 className='bedroom-card-title '> D31</h5>
            <p className='bedroom-badge' style={{background: '#eee8f1', color:'#9372A7'}}  > SINGLE </p>
        </div>
        <img className='bedroom-card-photo' src={room} alt='room photo' />

        {/* room size, noise, and size tags */}
        <div className='card-badge-container'>
        
          <p className='review-preview'> 
            <img className='icon-14px' src={reviewIcon} alt='bar' /> 
            {/* <p className='readmore-link'> Read more </p> */}
            "Yes! It's perfect. Everything works really well, tons of closet storage space, high up enough that it's quiet"
            
        </p>
        
          <p className='bedroom-badge-gray'> 

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

      {/* Pop-up that opens up when clicked on a bedroom card */}
      <BedroomModal
        title='D31' onClose={() => setShow(false)} show={show}
      />

    </div>
  )
}

export default BedroomCard

