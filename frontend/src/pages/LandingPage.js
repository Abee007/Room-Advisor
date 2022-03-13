import React from 'react'
import browse from '../static/browse.svg'
import filter from '../static/filter.svg'
import read from '../static/read.svg'
import HeroSection from '../components/Landing Page/HeroSection'

function LandingPage () {
  return (
    <section className='landing-page-container'>
      <div className='hero'>
        <HeroSection />
      </div>
    </section>
  )
}

export default LandingPage
