import React from 'react' // ES6 js
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav ({ user }) {
  return (
    <nav className='navbar navbar-container'>

      {/* hamburger menu
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navMainMenu' aria-controls='navMainMenu' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon bg-light' />
      </button> */}

      {/* Room Advisor Logo */}
      <img src='../../public/../../public/logo.png' alt='image' style={{ position: 'relative', height: '50px', width: '110px' }} />

      <div id='navMainMenu'>
        <div className='ml-auto'>
          {!user
            // if not logged in
            ? (<div className='nav-menu nav-menu-container'>
              <NavLink to='/' className='nav-item nav-link nav-links'>About</NavLink>
              <NavLink to='/' className='nav-item nav-link nav-links'>Login</NavLink>
            </div>)

            // if logged in
            : (
              <div className='nav-menu-container'>
                <NavLink to='/' className='nav-links' activeClassName='active'>Landing</NavLink>
                <NavLink to='/viewreviews' className='nav-item nav-link' activeClassName='active'>ViewReviews</NavLink>
                <NavLink to='/logout' className='nav-item nav-link' activeClassName='active'>Logout</NavLink>
              </div>
              )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
