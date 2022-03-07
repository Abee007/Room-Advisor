import React from 'react' // ES6 js
import { NavLink } from 'react-router-dom'
import './Nav.css'
import Dropdown_Multiselect from './Dropdown_Multiselect'
import logo from '../static/logo.png'
import Sortby_component from './Sortby_component'
import { Bookmark } from 'react-bootstrap-icons';
import { BoxArrowRight } from 'react-bootstrap-icons';

function Nav ({ user }) {
    // CAS logout
    const casLogout = () => {
        console.log('casLogout')
        window.open('http://localhost:4000/auth/cas/logout', '_self')
      }

  return (
    <nav className='navbar navbar-container d-flex'>

      {/* hamburger menu
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navMainMenu' aria-controls='navMainMenu' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon bg-light' />
      </button> */}

      {/* Room Advisor Logo */}
      <div className="p-2"> <img src={logo} alt='image' style={{ position: 'relative', height: '50px', width: '110px' }} /> </div>
      <div className=" p-2"><NavLink to='/about' className='nav-item nav-link' activeclassname='active'>About</NavLink></div>
      {/* <div className="push-right p-2"><Sortby_component/></div> */}
      {/* <div className=" p-2"><NavLink to='/viewreviews' className='nav-item nav-link' activeclassname='active'>About</NavLink></div> */}
      {/* <div className=" p-2"><NavLink to='/favorites' className='nav-item nav-link' activeclassname='active'> <Bookmark/> Favorites</NavLink></div> */}
      {/* <div className=" p-2"><NavLink to='/logout' onClick={casLogout} className='nav-item nav-link' activeclassname='active'> <BoxArrowRight/> Logout</NavLink></div> */}

          {/* {!user
            // if not logged in
            ? (<div className='nav-menu nav-menu-container'>
              <NavLink to='/about' className='nav-item nav-link nav-links' activeclassname='active'>About</NavLink>
              <NavLink to='/' className='nav-item nav-link nav-links'>Login</NavLink>
            </div>)

            // if logged in
            : ( */}
                {/* <Dropdown_Multiselect/> */}
        
                  
              {/* )} */}
      
    </nav>
  )
}

export default Nav
