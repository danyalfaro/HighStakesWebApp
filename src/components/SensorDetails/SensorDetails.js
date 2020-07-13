import React, { Component } from "react";
import "./SensorDetails.css";
import { FaArrowLeft } from "react-icons/fa";

export default class SensorDetails extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  showRows() {
    this.props.activeStakes.forEach((stake) => {
      console.log("Thisssssss");
    });
  }
  render() {
    return (
      <div>
        <div className="sensorDetailsContainer">
          <FaArrowLeft
            size={25}
            className="backArrow"
            onClick={() => {
              this.props.sensorOverall();
            }}
          />
        </div>
      </div>
    );
  }
}

class IndividualSensor extends Component {
  render() {
    return <div></div>;
  }
}
