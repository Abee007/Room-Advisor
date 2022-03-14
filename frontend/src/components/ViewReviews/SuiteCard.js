import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'
import './SuiteCard.css'
import room from '../../static/dorm_room.jpg'
import { FaRegBookmark } from 'react-icons/fa'
import SuiteModal from './SuiteModal'

function SuiteCard () {
  const [show, setShow] = useState(false)

  return (
    <div className='card'>

      {/* displaying room photo (--> to be carousel in the future) */}
      <div className='col-md-5'>
        <img className='card-photo' src={room} alt='room photo' />
        {/* <CarouselComponent/> */}
      </div>

      {/* creates container for the right hand side of the card where the text and badges will go */}
      <div
        className='card-right-side col-md-7' onClick={() => {
          console.log('show here')
          setShow(true)
        }}
      >

        {/* room number and bookmark icon */}
        <div className='card-title-container'>
          <h5 className='card-title'>D31</h5>
          <FaRegBookmark className='push-right' style={{ color: '#0053c5', fontSize: '30px' }} />
        </div>

        {/* room size, noise, and size tags */}
        <div className='card-badge-container'>
          <Badge pill bg='primary'> Triple
            {/* <img className='number-icon' src={three} />  */}
            {/* <p className='number-text'> Triple </p>  */}
          </Badge>{' '}
          <Badge pill bg='secondary'> Noise: 4.5 </Badge>{' '}
          <Badge pill bg='info'> Size: 3.4 </Badge>{' '}
        </div>

        <p className='card-review-quotes'> "It's tinyyyyyyy and no sunlight cause tiny window. no room..."</p>
        <h1 className='card-subtext'> 13 reviews</h1>

      </div>

      {/* pop-up with the individual room cards that shows up when clicked on the card */}
      <SuiteModal
        title='D31' onClose={() => {
          console.log('hide here')
          setShow(false)
        }} show={show}
      />

    </div>
  )
}

export default SuiteCard
