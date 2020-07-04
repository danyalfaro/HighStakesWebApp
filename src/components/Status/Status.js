import React, { Component } from "react";
import "./Status.css";

export default class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "LOADING...",
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const cityTemp = this.props.forecast.cityTemperature;
  //   console.log(cityTemp);
  //   const localTemp = this.props.localSensors.overallTemperature;
  //   console.log(localTemp);

  //   console.log("prevState: ", prevState);

  //   if (prevProps.forecast !== this.props.forecast) {
  //     console.log("Vamo a vel");
  //   }
  // }

  render() {
    return (
      <div className="statusWrapper">
        <div className="statusHeader">Current Status:</div>
        <div className="statusColor">
          <div className="statusColorLeft"></div>
          <div className="statusText">{this.state.status}</div>
        </div>
        <div className="statusTimeStamp">
          <h6>Last Updated: {this.props.forecast.timeStamp}</h6>
        </div>
      </div>
    );
  }
}
