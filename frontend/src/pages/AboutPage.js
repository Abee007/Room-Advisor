import React, { Component } from "react";
import Nav from "../components/Nav";
import AboutHeroSection from "../components/AboutPage/AboutHeroSection";

export default class ViewReviews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav user={this.props.user} />
        <AboutHeroSection />
      </div>
    );
  }
}
