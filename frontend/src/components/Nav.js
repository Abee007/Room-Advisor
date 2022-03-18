import "./Nav.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../static/logo.png";

function Nav({ props }) {
  const [isActiveHamburger, setActiveHamburger] = useState(false);

  const toggleActiveHamburger = () => {
    setActiveHamburger(!isActiveHamburger);
  };

  // CAS logout
  // const casLogout = () => {
  //   console.log("casLogout");
  //   window.open("http://localhost:4000/auth/cas/logout", "_self");
  // };

  //   return (
  //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-toggle="collapse"
  //         data-target="#navMainMenu"
  //         aria-controls="navMainMenu"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon" />
  //       </button>
  //       <div id="navMainMenu" className="navbar-collapse collapse">
  //         <div className="navbar-nav ml-auto">
  //           {props.mode === "TRUNCATED" ? (
  //             <img src={logo} alt='room-advisor-logo' style={{ position: 'relative', height: '50px', width: '110px' }} />
  //             // <NavLink to="/" className="nav-item nav-link active">
  //             //   <img src={logo} alt='room-advisor-logo' style={{ position: 'relative', height: '50px', width: '110px' }} />
  //             // </NavLink>
  //           ) : (
  //             <div>
  //               <NavLink
  //                 to="/"
  //                 className="nav-item nav-link"
  //                 activeClassName="active"
  //               >
  //                 Landing
  //               </NavLink>
  //               <NavLink
  //                 to="/viewreviews"
  //                 className="nav-item nav-link"
  //                 activeClassName="active"
  //               >
  //                 ViewReviews
  //               </NavLink>
  //               <NavLink
  //                 to="/logout"
  //                 className="nav-item nav-link"
  //                 activeClassName="active"
  //               >
  //                 Logout
  //               </NavLink>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // }

  return (
    <div className="navbar-header">
      <header>
        <nav>
          <div className="navbar-container">
            <NavLink to="/">
              <img
                src={logo}
                alt="room-advisor-logo"
                style={{ position: "relative", height: "50px", width: "110px" }}
              />
            </NavLink>

            <div className="menu">
              <NavLink
                to="/about"
                className="navbar-link"
                activeClassName="is-active"
              >
                About
              </NavLink>
              {props.user !== undefined ? (
                <NavLink
                  to="/logout"
                  className="navbar-link"
                  activeClassName="is-active"
                >
                  Logout
                </NavLink>
              ) : (
                ""
              )}
            </div>

            <button
              class={isActiveHamburger ? "hamburger is-active" : "hamburger"}
              onClick={toggleActiveHamburger}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <nav
        className={isActiveHamburger ? "mobile-nav is-active" : "mobile-nav"}
      >
        <NavLink
          to="/about"
          className="navbar-link"
          activeClassName="is-active"
        >
          About
        </NavLink>
        {props.user !== undefined ? (
          <NavLink
            to="/logout"
            className="navbar-link"
            activeClassName="is-active"
          >
            Logout
          </NavLink>
        ) : (
          ""
        )}
      </nav>
    </div>

    // <nav className='navbar navbar-container d-flex'>

    //   {/* Room Advisor Logo */}
    //   <div className='p-2'> <img src={logo} alt='image' style={{ position: 'relative', height: '50px', width: '110px' }} /> </div>

    //   <div className='p-2'><NavLink to='/about' className='nav-item nav-link' activeclassname='active'>About</NavLink></div>

    // </nav>
  );
}

export default Nav;
