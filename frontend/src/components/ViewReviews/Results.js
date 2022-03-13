import React from 'react'
import Sortby_component from './Sortby_component'

import './Results.css'

const Results = () => {
  return (

    <div className='results-container'>

      <h1> 6 suites found </h1>

      {/* Sort by tool displayed on the right corner of the container  */}
      <div className='push-right'>
        <Sortby_component />
      </div>

    </div>

  )
}

export default Results
