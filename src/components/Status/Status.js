import React, { Component } from "react";
import "./Status.css";

export default class Status extends Component {
  render() {
    return (
      <div className="statusWrapper">
        <div className="statusHeader">Current Status:</div>
        <div className="statusColor">
          <div className="statusColorLeft"></div>
          <div className="statusText">{this.props.status}</div>
        </div>
      </div>
    );
  }
}
