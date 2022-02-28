import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'
import './SuiteCard.css'
import { Button } from './Button'
// import { FaRegBookmark } from 'react-icons/fa'
// import Modal from './Modal'

function SuiteCard () {
  const [show, setShow] = useState(false)
  return (
    <div className='card row'>

      <div className='col-md-4 card-photo-container'>
        <img style={{ height: '200px', width: '200px', objectFit: 'contain' }} src='/images/landing_page.png' />
      </div>

      <div>

        {/* room number and bookmark icon */}
        <div className='title-container'>
          <h5 className='card-title'>D31</h5>
          {/* <FaRegBookmark style={{ color: '#0053c5', fontSize: '30px' }} /> */}
        </div>

        {/* room size, noise, and size tags */}
        <div className='card-button-container'><Badge pill bg='primary'> Triple </Badge>{' '}
          <Badge pill bg='secondary'> Noise: 4.5 </Badge>{' '}
          <Badge pill bg='info'> Size: 3.4 </Badge>{' '}
          <Button buttonStyle='btn--primary' buttonSize='btn--small' onClick={() => setShow(true)}>Read reviews</Button>
        </div>

        {/* <Modal title='D31' onClose={() => setShow(false)} show={show}>
            <p>This is modal body</p>
            </Modal> */}
      </div>

    </div>
  )
}

export default SuiteCard
