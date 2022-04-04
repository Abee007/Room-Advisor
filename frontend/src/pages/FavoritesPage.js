import React, { Component } from "react";
import Nav from "../components/Nav";

export default class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };
  }

  render() {
    return (
      <div>
        <Nav user={this.state.user} />
        FavoritesPage
      </div>
    );
  }
}
