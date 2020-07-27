import React, { Component } from "react";
import "./Status.css";
import { subscribeUser } from "../../subscription";

export default class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "LOADING...",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.severityArray !== this.props.severityArray) {
      let statusArray = [];
      this.props.severityArray.forEach((stake) => {
        // console.log("Current Stake: ", stake);
        // console.log("Starting statusArray: ");
        // console.log(statusArray);
        statusArray = statusArray.concat(Object.values(stake));
        // console.log("Ending statusArray: ");
        // console.log(statusArray);

        let statusResult = "STABLE";
        for (let i = 0; i < statusArray.length; i++) {
          let val = statusArray[i];
          if (val === "ALERT") {
            statusResult = "ALERT";
            break;
          } else if (val === "WARNING") {
            statusResult = "WARNING";
          }
        }
        this.setState({ status: statusResult });
      });
    }
  }

  statusColor() {
    if (this.state.status === "ALERT") {
      subscribeUser();
      return "statusAlert";
    } else if (this.state.status === "WARNING") {
      return "statusWarning";
    } else if (this.state.status === "STABLE") {
      return "statusStable";
    }
  }

  statusColorLeft() {
    if (this.state.status === "ALERT") {
      return "statusAlertLeft";
    } else if (this.state.status === "WARNING") {
      return "statusWarningLeft";
    } else if (this.state.status === "STABLE") {
      return "statusStableLeft";
    }
  }

  render() {
    return (
      <div className="statusWrapper">
        <div className="statusHeader">Current Status:</div>
        <div className={this.statusColor()}>
          <div className={this.statusColorLeft()}></div>
          <div className="statusText">{this.state.status}</div>
        </div>
        <div className="statusTimeStamp">
          <h6>Last Updated: {this.props.forecast.timeStamp}</h6>
        </div>
      </div>
    );
  }
}
