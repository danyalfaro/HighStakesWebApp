import React, { Component } from "react";
import { FaHashtag } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaRulerVertical } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import "./LocalSensor.css";

export default class LocalSensor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      severity: "STABLE",
    };
    this.renderType = this.renderType.bind(this);
  }

  checkSeverity() {
    let severity = this.props.severity;
    if (severity === "ALERT") {
      return "localSensor alerta";
    } else if (severity === "WARNING") {
      return "localSensor warning";
    } else {
      return "localSensor";
    }
  }

  renderType() {
    if (this.props.sensorType === "stakes") {
      return (
        <div>
          <div className="sensorValues">
            <div className="sensorIcon">
              <FaHashtag size={40} />
            </div>
            <div className="sensorData">{this.props.activeStakes.length}</div>
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
            <div className="sensorData">{this.props.overallHumidity}</div>
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
            <div className="sensorData">{this.props.overallTemperature}</div>
          </div>
          <div className="sensorName">Overall Temperature</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div
        className={this.checkSeverity()}
        onClick={() => {
          this.props.sensorDetails(this.props.sensorType);
        }}
      >
        {this.renderType()}
      </div>
    );
  }
}
