import React, { Component } from "react";
import "./SensorList.css";
import LocalSensor from "../LocalSensor/LocalSensor";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class SensorList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overallTemperature: "92",
      overallHumidity: "23",
      overallWaterLevel: "1",
    };
  }
  checkSeverity(sensorType) {
    let statusResult = "STABLE";
    let severityArray = this.props.severityArray;
    console.log(severityArray);
    for (let i = 0; i < severityArray.length; i++) {
      let stake = severityArray[i][sensorType];
      if (stake === "ALERT") {
        statusResult = "ALERT";
        break;
      } else if (stake === "WARNING") {
        statusResult = "WARNING";
      }
    }
    return statusResult;
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
                overallWaterLevel={this.state.overallWaterLevel}
                severity={this.checkSeverity("waterLevelSeverity")}
              />
            </Col>
            <Col xs={6}>
              <LocalSensor
                sensorType="temperature"
                overallTemperature={this.state.overallTemperature}
                severity={this.checkSeverity("temperatureSeverity")}
              />
              <LocalSensor
                sensorType="humidity"
                overallHumidity={this.state.overallHumidity}
                severity={this.checkSeverity("humiditySeverity")}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
