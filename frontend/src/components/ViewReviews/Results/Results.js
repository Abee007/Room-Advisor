import "./Results.css";
import React, { Component } from "react";
import SortByComponent from "./ResultSortByComponent";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noRooms: this.props.noRooms,
      currSelectedSortBy: this.props.sortBy,
    };
  }

  handleSortByChange = (e) => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div className="results-container">
        <h1>{this.state.noRooms} suites found </h1>
        {/* Sort by tool displayed on the right corner of the container  */}
        <SortByComponent
            sortBy={this.state.currSelectedSortBy}
            handleChange={this.handleSortByChange}
        />
      </div>
    );
  }
}
