import React, { Component } from "react";
import "./SensorList.css";
import LocalSensor from "../LocalSensor/LocalSensor";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class SensorList extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {

  //   }
  // }
  checkStatus(stake) {
    // temperature: "79", humidity: "82", waterLevel: "1"
    if (
      stake.temperatureSeverity === "ALERT" ||
      stake.humiditySeverity === "ALERT" ||
      stake.waterLevelSeverity === "ALERT"
    ) {
      return 2;
    } else if (
      stake.temperatureSeverity === "WARNING" ||
      stake.humiditySeverity === "WARNING" ||
      stake.waterLevelSeverity === "WARNING"
    ) {
      return 1;
    } else return 0;
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.severityArray.forEach((stake) => {
      console.log(stake);
      let value = this.checkStatus(stake);
      if (value === 2) {
        console.log("ALEEEEEEEERT!");
      } else if (value === 1) {
        console.log("WARNIIIIIIIIING!");
      } else if (value === 0) {
        console.log("STAAAAABLE!");
      }
    });
  }

  render() {
    return (
      <div className="localWrapper">
        <div className="localHeader">Local Sensors</div>
        <div className="localLine"></div>
        <Container className="sensorContainer">
          <Row>
            <Col xs={6}>
              <LocalSensor
                sensorType="stakes"
                activeStakes={this.props.localSensors.activeStakes}
              />
              <LocalSensor
                sensorType="waterLevel"
                overallWaterLevel={this.props.localSensors.overallWaterLevel}
              />
            </Col>
            <Col xs={6}>
              <LocalSensor
                sensorType="temperature"
                overallTemperature={this.props.localSensors.overallTemperature}
              />
              <LocalSensor
                sensorType="humidity"
                overallHumidity={this.props.localSensors.overallHumidity}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
