import React from 'react'
import HeroSection from '../components/LandingPageComponents/HeroSection'

function LandingPage ({ isLoggedIn }) {
  return (
    <section className='landing-page-container'>
      <div className='hero'>
        <HeroSection isLoggedIn={isLoggedIn}/>
      </div>
    </section>
  )
}

export default LandingPage