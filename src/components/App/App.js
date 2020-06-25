import React from "react";
import "./App.css";
import Status from "../Status/Status";
import Forecast from "../Forecast/Forecast";
import SensorList from "../SensorList/SensorList";

import { callCurrentWeather } from "../../lib/simpleCurrentWeather";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStatus: "STABLE",
      location: {
        currentLatitude: "",
        currentLongitude: "",
      },
      forecast: {
        cityTemperature: "",
        cityTemperatureHigh: "",
        cityTemperatureLow: "",
        cityPrecipitation: "",
        cityHumidity: "",
      },
      localSensors: {
        activeStakes: "9",
        overallTemperature: "85",
        overallPrecipitation: "15",
        overallHumidity: "40",
        overallWaterLevel: "3",
      },
    };
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
    // this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }

  // getCurrentLocation() {
  //   let currentComponent = this;
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     const currentLat = `${position.coords.latitude}`;
  //     const currentLon = `${position.coords.longitude}`;
  //     console.log(currentLat, currentLon);
  //     currentComponent.setState({
  //       currentLatitude: currentLat,
  //       currentLongitude: currentLon,
  //     });
  //   });
  // }

  // getCurrentWeather() {
  //   this.getCurrentLocation();
  //   callCurrentWeather(
  //     this.state.forecast.currentLatitude,
  //     this.state.forecast.currentLongitude
  //   );
  // }

  getCurrentWeather() {}

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log("getCurrentPosition Success " + lat + lon);
        this.setState({
          location: {
            currentLatitude: lat,
            currentLongitude: lon,
          },
        });

        //ASYNC AWAIT STUFF GOES DOWN HERE:
        callCurrentWeather(lat, lon).then((data) => {
          console.log(data);
          const fromForecast = {
            cityTemperature: data.temperature,
            cityTemperatureHigh: data.temperatureMax24Hour,
            cityTemperatureLow: data.temperatureMin24Hour,
            cityPrecipitation: data.precip1Hour,
            cityHumidity: data.relativeHumidity,
          };
          this.setState({
            forecast: fromForecast,
          });
        });
      },

      (error) => {
        this.props.displayError("Error dectecting your location");
        console.error(JSON.stringify(error));
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="appHeader">Welcome to High Stakes</header>
        <Status status={this.state.currentStatus} />
        {this.getCurrentWeather()}
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
