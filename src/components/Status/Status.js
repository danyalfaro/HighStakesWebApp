import React, { Component } from "react";
import "./Status.css";

export default class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "FRESH",
    };
  }

  componentDidMount() {
    const forecast = this.props.forecast;
    console.log(Number(forecast.cityTemperatureHigh));
  }

  render() {
    return (
      <div className="statusWrapper">
        <div className="statusHeader">Current Status:</div>
        <div className="statusColor">
          <div className="statusColorLeft"></div>
          <div className="statusText">{this.state.status}</div>
        </div>
      </div>
    );
  }
}
