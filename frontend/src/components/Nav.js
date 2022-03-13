import React from 'react' // ES6 js
import { NavLink } from 'react-router-dom'
import './Nav.css'
import logo from '../static/logo.png'

function Nav ({ user }) {

  return (
    <nav className='navbar navbar-container d-flex'>

      {/* Room Advisor Logo */}
      <div className='p-2'> <img src={logo} alt='image' style={{ position: 'relative', height: '50px', width: '110px' }} /> </div>

      <div className=' p-2'><NavLink to='/about' className='nav-item nav-link' activeclassname='active'>About</NavLink></div>

    </nav>
  )
}

export default Nav
