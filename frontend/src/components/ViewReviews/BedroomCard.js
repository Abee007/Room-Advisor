import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'
import './BedroomCard.css'
import room from '../../static/dorm_room.jpg'
import { FaRegBookmark } from 'react-icons/fa'
import BedroomModal from './BedroomModal'

function BedroomCard () {
  const [show, setShow] = useState(false)
  return (
    <div className='card'>

      <div className='col-md-5'>
        <img className='card-photo' src={room} alt='room photo' />
        {/* <CarouselComponent/> */}
      </div>

      <div className='card-right-side' className='col-md-7' onClick={() => setShow(true)}>

        {/* room number and bookmark icon */}
        <div className='card-title-container'>
          <h5 className='card-title'> D31A </h5>
          <FaRegBookmark className='push-right' style={{ color: '#0053c5', fontSize: '30px' }} />
        </div>

        {/* room size, noise, and size tags */}
        <div className='card-badge-container'>
          <Badge pill bg='primary'> Single
            {/* <img className='number-icon' src={three} />  */}
            {/* <p className='number-text'> Triple </p>  */}
          </Badge>{' '}
          <Badge pill bg='secondary'> Noise: 4.5 </Badge>{' '}
          <Badge pill bg='info'> Size: 3.4 </Badge>{' '}
        </div>

        <p className='card-review-quotes'> "It's tinyyyyyyy and no sunlight cause tiny window. no room..."</p>
        <h1 className='card-subtext'> 13 reviews</h1>

      </div>

      {/* Pop-up that opens up when clicked on a bedroom card */}
      <BedroomModal
        title='D31' onClose={() => setShow(false)} show={show}
      />

    </div>
  )
}

export default BedroomCard
