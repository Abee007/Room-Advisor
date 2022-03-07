import React from 'react'
import Sortby_component from './Sortby_component'

import './Results.css'

const Results = () => {
  return (
    <div className='results_container'>
      <h1> 6 suites found </h1>

      <div className='push_right'>
        <Sortby_component />
      </div>
    </div>
  )
}

export default Results
