import React from "react"; // ES6 js
import { NavLink } from "react-router-dom";

function Nav({ user }) {
  // CAS logout
  // const casLogout = () => {
  //   console.log("casLogout");
  //   window.open("http://localhost:4000/auth/cas/logout", "_self");
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navMainMenu"
        aria-controls="navMainMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div id="navMainMenu" className="navbar-collapse collapse">
        <div className="navbar-nav ml-auto">
          {!user ? (
            <NavLink to="/" className="nav-item nav-link active">
              Landing
            </NavLink>
          ) : (
            <div>
              <NavLink
                to="/"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Landing
              </NavLink>
              <NavLink
                to="/viewreviews"
                className="nav-item nav-link"
                activeClassName="active"
              >
                ViewReviews
              </NavLink>
              <NavLink
                to="/logout"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Logout
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
