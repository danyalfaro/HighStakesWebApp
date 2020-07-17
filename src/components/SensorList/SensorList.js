import React, { Component } from "react";
import "./SensorList.css";
import LocalSensor from "../LocalSensor/LocalSensor";
import SensorDetails from "../SensorDetails/SensorDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class SensorList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overall: {
        overallTemperature: "",
        overallHumidity: "",
        overallWaterLevel: "",
      },
      showSensors: "overall",
    };

    this.onSensorDetailClick = this.onSensorDetailClick.bind(this);
    this.onSensorOverallClick = this.onSensorOverallClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      let temperatureSum = 0;
      let humiditySum = 0;
      let waterLevelSum = 0;
      let activeStakes = this.props.localSensors.activeStakes.length;
      this.props.localSensors.activeStakes.forEach((stake) => {
        temperatureSum += stake.temperature;
        humiditySum += stake.humidity;
        waterLevelSum += stake.waterLevel;
      });
      const overall = {
        overallTemperature: Math.round(temperatureSum / activeStakes),
        overallHumidity: Math.round(humiditySum / activeStakes),
        overallWaterLevel: Math.round(waterLevelSum / activeStakes),
      };
      this.setState({ overall: overall });
    }
  }

  checkSeverity(sensorType) {
    let statusResult = "STABLE";
    let severityArray = this.props.severityArray;
    // console.log(severityArray);
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

  onSensorDetailClick(sensorType) {
    this.setState({ showSensors: sensorType });
  }

  onSensorOverallClick() {
    this.setState({ showSensors: "overall" });
  }

  showSensors() {
    if (this.state.showSensors === "overall") {
      return (
        <Container className="sensorContainer">
          <Row>
            <Col xs={6}>
              <LocalSensor
                sensorType="stakes"
                activeStakes={this.props.localSensors.activeStakes}
                sensorDetails={this.onSensorDetailClick}
              />
              <LocalSensor
                sensorType="waterLevel"
                overallWaterLevel={this.state.overall.overallWaterLevel}
                severity={this.checkSeverity("waterLevelSeverity")}
                sensorDetails={this.onSensorDetailClick}
              />
            </Col>
            <Col xs={6}>
              <LocalSensor
                sensorType="temperature"
                overallTemperature={this.state.overall.overallTemperature}
                severity={this.checkSeverity("temperatureSeverity")}
                sensorDetails={this.onSensorDetailClick}
              />
              <LocalSensor
                sensorType="humidity"
                overallHumidity={this.state.overall.overallHumidity}
                severity={this.checkSeverity("humiditySeverity")}
                sensorDetails={this.onSensorDetailClick}
              />
            </Col>
          </Row>
        </Container>
      );
    } else if (this.state.showSensors === "temperature") {
      return (
        <SensorDetails
          sensorType="temperature"
          activeStakes={this.props.localSensors.activeStakes}
          sensorOverall={this.onSensorOverallClick}
        />
      );
    } else if (this.state.showSensors === "humidity") {
      return (
        <SensorDetails
          sensorType="humidity"
          activeStakes={this.props.localSensors.activeStakes}
          sensorOverall={this.onSensorOverallClick}
        />
      );
    } else if (this.state.showSensors === "waterLevel") {
      return (
        <SensorDetails
          sensorType="waterLevel"
          activeStakes={this.props.localSensors.activeStakes}
          sensorOverall={this.onSensorOverallClick}
        />
      );
    } else if (this.state.showSensors === "stakes") {
      return (
        <SensorDetails
          sensorType="stakes"
          activeStakes={this.props.localSensors.activeStakes}
          sensorOverall={this.onSensorOverallClick}
        />
      );
    }
  }

  render() {
    return (
      <div className="localWrapper">
        <div className="localHeader">Local Sensors</div>
        <div className="localLine"></div>
        {this.showSensors()}
      </div>
    );
  }
}
