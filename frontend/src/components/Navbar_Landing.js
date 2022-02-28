import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import './Navbar_Landing.css'

function Navbar_Landing () {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <div className='navbar-container'>
      {/* Link to the header within Navbar */}
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        {/* Room Advisor Logo */}
        <img src='/logo.png' alt='image' style={{ height: '50px', width: '110px' }} />
      </Link>

      {/* Hamburger menu that shows up when screen size is small */}
      {/* <div className='menu-icon-small-screen' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div> */}

      {/* Pages navigation bar for Favorites & About */}
      <div className='nav-menu-container'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Login
            </Link>
          </li>

        </ul>

      </div>

    </div>
  )
}

export default Navbar_Landing
