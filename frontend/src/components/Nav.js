import "./Nav.css";
import React, { Component, createRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../static/logo.png";
import NavDropdownComponent from "./ViewReviews/NavDropdownComponent";
import NavDropdownMultiselect from "./ViewReviews/NavDropdownMultiselect";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveHamburger: false,
    };
    this.container = createRef();
  }

  // Ensure that when the user clicks outside the navbar, you close it
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        isActiveHamburger: false,
      });
    }
  };

  toggleActiveHamburger = () => {
    const isActiveHamburger = !this.state.isActiveHamburger;
    this.setState({
      isActiveHamburger,
    });
  };

  handleBuildingDropdownChange = (e) => {
    //Update states for both building dropdowns (for large and small screens)
    this.buildingDropdown1.updateYourState(e);
    this.buildingDropdown2.updateYourState(e);
    // Send the change to the parent page so it also updates
    this.props.handleBuildingChange(e);
  };

  handleRoomSizeChange = (e) => {
    //Update states for both building dropdowns (for large and small screens)
    this.roomSize1.updateYourState(e);
    this.roomSize2.updateYourState(e);
    // Send the change to the parent page so it also updates
    this.props.handleRoomSizeChange(e);
  };

  render() {
    return (
      <div className="container" ref={this.container}>
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
                        ref={(ip) => {
                          this.buildingDropdown1 = ip;
                        }}
                        defaultCollege={this.props.user.meta.college}
                        handleChange={this.handleBuildingDropdownChange}
                      />
                      <NavDropdownMultiselect
                        ref={(ip) => {
                          this.roomSize1 = ip;
                        }}
                        handleChange={this.handleRoomSizeChange}
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
              this.state.isActiveHamburger
                ? "mobile-nav is-active"
                : "mobile-nav"
            }
          >
            {this.props.mode === "VERBOSE" ? (
              <div className="sm-screen-filters">
                <div className="filter-item">
                  <NavDropdownComponent
                    ref={(ip) => {
                      this.buildingDropdown2 = ip;
                    }}
                    defaultCollege={this.props.user.meta.college}
                    handleChange={this.handleBuildingDropdownChange}
                  />
                </div>
                <div className="filter-item">
                  <NavDropdownMultiselect
                    ref={(ip) => {
                      this.roomSize2 = ip;
                    }}
                    handleChange={this.handleRoomSizeChange}
                  />
                </div>
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
      </div>
    );
  }
}
