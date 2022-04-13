import "./SuiteModal.css";
import React, { Component } from "react";
// import { CSSTransition } from 'react-transition-group'
import Badge from "react-bootstrap/Badge";
import BedroomCard from "./BedroomCard";
import { numberToAcronym } from "../../../utils/colleges";

export default class SuiteModal extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleFavorited = (e) => {
    this.props.handleFavorited(e);
  };

  activateReview = (e) => {
    this.props.handleActivateReview(e);
  };

  render() {
    return (
      <div className="suite-modal">
        <div className="suite-modal-header">
          <h4 className="suite-modal-title">{this.props.title}</h4>
          <div className="suite-badge-container">
            <div className="pill">
              <Badge pill bg="primary">
                {numberToAcronym(this.props.suiteStats.noBeds)}
              </Badge>
            </div>
            <div className="pill">
              <Badge pill bg="secondary">
                Noise:{" "}
                {(Math.round(this.props.suiteStats.noise * 10) / 10).toFixed(1)}
              </Badge>
            </div>
            <div className="pill">
              <Badge pill bg="info">
                Size:{" "}
                {(Math.round(this.props.suiteStats.size * 10) / 10).toFixed(1)}
              </Badge>
            </div>
          </div>
        </div>

        <div className="suite-modal-card-container">
          {this.props.rooms.map((room) => (
            <BedroomCard
              key={room.roomCode}
              room={room}
              handleFavorited={this.handleFavorited}
              handleActivateReview={this.activateReview}
            />
          ))}
        </div>
      </div>
    );
  }
}