import React, { Component } from "react";
import "./SensorDetails.css";
import { FaArrowLeft } from "react-icons/fa";

export default class SensorDetails extends Component {
  constructor(props) {
    super(props);
    this.showRows = this.showRows.bind(this);
  }
  showRows() {
    this.props.activeStakes.forEach((stake) => {
      console.log("Thisssssss");
      return <IndividualSensor />;
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
          <span className="detailHeader">{this.props.sensorType} info</span>

          <div className="sensorDetailsScroll">
            {this.props.activeStakes.map((stake) => {
              // console.log(stake);
              return (
                <IndividualSensor
                  key={stake.id}
                  id={stake.id}
                  type={this.props.sensorType}
                  value={stake[this.props.sensorType]}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

class IndividualSensor extends Component {
  render() {
    return (
      <div className="individualSensorWrap">
        <div>
          {this.props.type} : {this.props.value}
          <span className="stakeId">Stake ID : {this.props.id}</span>
        </div>
      </div>
    );
  }
}
