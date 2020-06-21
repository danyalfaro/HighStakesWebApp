import React, { Component } from "react";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { FaRulerVertical } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import "./LocalSensor.css";

export default class LocalSensor extends Component {
  constructor(props) {
    super(props);
    this.renderType = this.renderType.bind(this);
  }

  renderType() {
    if (this.props.sensorType === "stakes") {
      return (
        <div>
          <div className="sensorValues">
            <div className="sensorIcon">
              <AiOutlineFieldNumber size={40} />
            </div>
            <div className="sensorData">{this.props.activeStakes}</div>
          </div>
          <div className="sensorName">Active Stakes</div>
        </div>
      );
    } else if (this.props.sensorType === "humidity") {
      return (
        <div>
          <div className="sensorValues">
            <div className="sensorIcon">
              <WiHumidity size={40} />
            </div>
            <div className="sensorData">{this.props.overallHumidity}%</div>
          </div>
          <div className="sensorName">Overall Humidity</div>
        </div>
      );
    } else if (this.props.sensorType === "waterLevel") {
      return (
        <div>
          <div className="sensorValues">
            <div className="sensorIcon">
              <FaRulerVertical size={40} />
            </div>
            <div className="sensorData">{this.props.overallWaterLevel}"</div>
          </div>
          <div className="sensorName">Overall Water Level</div>
        </div>
      );
    } else if (this.props.sensorType === "temperature") {
      return (
        <div>
          <div className="sensorValues">
            <div className="sensorIcon">
              <FaTemperatureLow size={40} />
            </div>
            <div className="sensorData">{this.props.overallTemperature}"</div>
          </div>
          <div className="sensorName">Overall Temperature</div>
        </div>
      );
    }
  }

  render() {
    return <div className="localSensor">{this.renderType()}</div>;
  }
}
