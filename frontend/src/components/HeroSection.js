import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import LoginComponent from './Login'

function HeroSection () {
  return (
    <div className='hero-container'>

      <h1>
        Choosing a room just got easier
      </h1>

      <p>
        Room Advisor is a website where Yale students can candidly rate 
        and review residential college rooms. We seek to improve the 
        Yale housing experiences by empowering Yale students with information 
        to help them find living spaces they love.
      </p>

      <Button buttonStyle='btn--primary' buttonSize='btn--medium'>
          <LoginComponent/>
        </Button>

    
    </div>
  )
}

export default HeroSection
