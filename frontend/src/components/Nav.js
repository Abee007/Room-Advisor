import "./Nav.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../static/logo.png";
import NavDropdownComponent from "./ViewReviews/NavDropdownComponent";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveHamburger: false,
    };
  }

  toggleActiveHamburger = () => {
    const isActiveHamburger = !this.state.isActiveHamburger;
    this.setState({
      isActiveHamburger,
    });
  };

  handleBuildingDropdownChange = (e) => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div className="navbar-header">
        <header>
          <nav>
            <div className="navbar-container">
              <NavLink to="/">
                <img
                  src={logo}
                  alt="room-advisor-logo"
                  style={{
                    position: "relative",
                    height: "50px",
                    width: "110px",
                  }}
                />
              </NavLink>

              <div className="menu">
                {this.props.mode === "VERBOSE" ? (
                  <div className="lg-screen-filters">
                    <NavDropdownComponent
                      defaultCollege={this.props.user.meta.college}
                      handleChange={this.handleBuildingDropdownChange}
                    />
                  </div>
                ) : (
                  ""
                )}
                <NavLink to="/about" className="navbar-link">
                  About
                </NavLink>
                {this.props.user !== undefined ? (
                  <NavLink to="/logout" className="navbar-link">
                    Logout
                  </NavLink>
                ) : (
                  ""
                )}
              </div>

              <button
                class={
                  this.state.isActiveHamburger
                    ? "hamburger is-active"
                    : "hamburger"
                }
                onClick={this.toggleActiveHamburger}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </header>

        <nav
          className={
            this.state.isActiveHamburger ? "mobile-nav is-active" : "mobile-nav"
          }
        >
          {this.props.mode === "VERBOSE" ? (
            <div className="sm-screen-filters">
              <NavDropdownComponent
                defaultCollege={this.props.user.meta.college}
                handleChange={this.handleBuildingDropdownChange}
              />
            </div>
          ) : (
            ""
          )}
          <NavLink to="/about" className="navbar-link">
            About
          </NavLink>
          {this.props.user !== undefined ? (
            <NavLink to="/logout" className="navbar-link">
              Logout
            </NavLink>
          ) : (
            ""
          )}
        </nav>
      </div>
    );
  }
}
