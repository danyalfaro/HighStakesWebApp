import React, { Component } from "react";
import "./SensorList.css";
import LocalSensor from "../LocalSensor/LocalSensor";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class SensorList extends Component {
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
