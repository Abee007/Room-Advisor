import React from 'react' // ES6 js
import { NavLink } from 'react-router-dom'
import './Nav.css'
import logo from '../static/logo.png'

function Nav ({ user }) {
    // CAS logout
    const casLogout = () => {
        console.log('casLogout')
        window.open('http://localhost:4000/auth/cas/logout', '_self')
      }

  return (
    <nav className='navbar navbar-container'>

      {/* hamburger menu
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navMainMenu' aria-controls='navMainMenu' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon bg-light' />
      </button> */}

      {/* Room Advisor Logo */}
      <img src={logo} alt='image' style={{ position: 'relative', height: '50px', width: '110px' }} />

      <div id='navMainMenu'>
          {!user
            // if not logged in
            ? (<div className='nav-menu nav-menu-container'>
              <NavLink to='/about' className='nav-item nav-link nav-links' activeclassname='active'>About</NavLink>
              <NavLink to='/' className='nav-item nav-link nav-links'>Login</NavLink>
            </div>)

            // if logged in
            : (
              <div>
                <NavLink to='/viewreviews' className='nav-item nav-link' activeclassname='active'>Landing</NavLink>
                <NavLink to='/logout' onClick={casLogout} className='nav-item nav-link' activeclassname='active'>Logout</NavLink>
              </div>
              )}
      </div>
    </nav>
  )
}

export default Nav
