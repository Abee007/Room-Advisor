import React from 'react'
import SortbyComponent from './SortbyComponent'

import './Results.css'

const Results = () => {
  return (

    <div className='results-container'>

      <h1> 6 suites found </h1>

      {/* Sort by tool displayed on the right corner of the container  */}
      <div className='push-right'>
        <SortbyComponent />
      </div>

    </div>

  )
}

export default Results
