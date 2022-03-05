import React from 'react'
import browse from '../../static/browse.svg'
import filter from '../../static/filter.svg'
import read from '../../static/read.svg'
import '../About Page/AboutHeroSection.css'

function AboutHeroSection () {
  return (
    <div>

        <h2 className='hero-secondary'> How it works? </h2>

          <div className='row'>

              <div className='column'>
                <div className='column-image-container'>
                  <img className='column-image' src={browse} alt="Browse rooms"/> 
                </div>
                  <h2 className='column-title'> Browse photos and info about suites rooms.</h2>
              </div>

              <div className='column'>
                <div className='column-image-container'>
                  <img className='column-image'src={browse} alt="Browse rooms" src={filter} alt="Filter rooms"/>
                </div>
                  <h2 className='column-title'>Search and filter rooms based on preferences.</h2>
              </div>

              <div className='column'>
                <div className='column-image-container'>
                  <img className='column-image' src={read} alt="Read reviews"/>
                </div>
                  <h2 className='column-title'>Read from thousands of student evaluations.</h2>
              </div>

          </div>

      </div>
  )
}

export default AboutHeroSection
