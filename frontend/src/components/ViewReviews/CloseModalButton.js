import React from 'react'
import back from '../../static/backArrow.svg'

const CloseModalButton = () => {
  return (

    <button>
        <img className='badge-icon' src={back} />
    </button>

  )
}

export default CloseModalButton