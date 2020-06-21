import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Status from "../Status/Status";
import Forecast from "../Forecast/Forecast";
import SensorList from "../SensorList/SensorList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStatus: "STABLE",
      forecast: {
        currentCity: "San Francisco",
        cityTemperature: "72",
        cityPrecipitation: "15",
        cityHumidity: "55",
      },
      localSensors: {
        activeStakes: "9",
        overallTemperature: "85",
        overallPrecipitation: "15",
        overallHumidity: "40",
        overallWaterLevel: "3",
      },
    };
  }
  render() {
    return (
      <div className="App">
        <header className="appHeader">Welcome</header>
        <Status status={this.state.currentStatus} />
        <Forecast
          temperature={this.state.forecast.cityTemperature}
          precipitation={this.state.forecast.cityPrecipitation}
          humidity={this.state.forecast.cityHumidity}
        />
        <SensorList
          activeStakes={this.state.localSensors.activeStakes}
          overallTemperature={this.state.localSensors.overallTemperature}
          overallPrecipitation={this.state.localSensors.overallPrecipitation}
          overallHumidity={this.state.localSensors.overallHumidity}
          overallWaterLevel={this.state.localSensors.overallWaterLevel}
        />
      </div>
    );
  }
}

export default App;
