import React from 'react' // ES6 js
import { NavLink } from 'react-router-dom'
import '../Nav.css'
import DropdownMultiselect from './DropdownMultiselect'
import DropdownComponent from './DropdownComponent'
import logo from '../../static/logo.png'
import Searchbar from './Searchbar'
import { Bookmark, BoxArrowRight } from 'react-bootstrap-icons'

function Nav_home ({ user }) {
  // CAS logout
  const casLogout = () => {
    console.log('casLogout')
    window.open('http://localhost:4000/auth/cas/logout', '_self')
  }

  return (
    <nav className='navbar navbar-container d-flex'>

      {/* Room Advisor Logo */}
      <div className='p-2'> <img src={logo} alt='image' style={{ position: 'relative', height: '50px', width: '110px' }} />
      </div>

      {/* Search, dropdown tools in the center and Navigational page links on the right */}
      <div className='push-right p-2'><DropdownComponent /></div>
      <div className='push-right p-2' style={{ marginLeft: '10px', marginRight: '10px', paddingRight: '10px', paddingLeft: '10px' }}> <DropdownMultiselect />  </div>
      <div className='nav-link p-2'> <Searchbar /> </div>
      <div className='nav-link p-2'><NavLink to='/viewreviews' className='nav-item nav-link' activeclassname='active'>About</NavLink></div>
      <div className='nav-link p-2'><NavLink to='/favorites' className='nav-item nav-link' activeclassname='active'> <Bookmark /> Favorites</NavLink></div>
      <div className='nav-link p-2'><NavLink to='/logout' onClick={casLogout} className='nav-item nav-link' activeclassname='active'> <BoxArrowRight /> Logout</NavLink></div>

    </nav>
  )
}

export default Nav_home
