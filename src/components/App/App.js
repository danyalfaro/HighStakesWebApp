import React from "react";
import "./App.css";
import Status from "../Status/Status";
import Forecast from "../Forecast/Forecast";
import SensorList from "../SensorList/SensorList";

import { callCurrentWeather } from "../../lib/simpleCurrentWeather";
import { calculateStatus } from "../../lib/calculateStatus";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        timeStamp: "",
      },
      localSensors: {
        activeStakes: [
          { temperature: 90, humidity: 57, waterLevel: 1, id: "0" },
          { temperature: 90, humidity: 57, waterLevel: 1, id: "1" },
          { temperature: 91, humidity: 57, waterLevel: 1, id: "2" },
          { temperature: 89, humidity: 58, waterLevel: 1, id: "3" },
          { temperature: 89, humidity: 58, waterLevel: 1, id: "4" },
        ],
      },
      severityArray: [],
    };
  }

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
            cityPrecipitation: Math.floor(data.precip6Hour * 100),
            cityHumidity: data.relativeHumidity,
            timeStamp: data.validTimeLocal,
          };

          const severityArray = calculateStatus(
            fromForecast,
            this.state.localSensors
          );

          this.setState({
            forecast: fromForecast,
            severityArray: severityArray,
          });
        });
      },

      (error) => {
        // this.props.displayError("Error dectecting your location");
        console.error(JSON.stringify(error));
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="appHeader">High Stakes</header>
        <Status
          forecast={this.state.forecast}
          localSensors={this.state.localSensors}
          severityArray={this.state.severityArray}
        />
        <Forecast
          temperature={this.state.forecast.cityTemperature}
          precipitation={this.state.forecast.cityPrecipitation}
          humidity={this.state.forecast.cityHumidity}
        />
        <SensorList
          localSensors={this.state.localSensors}
          severityArray={this.state.severityArray}
        />
      </div>
    );
  }
}

export default App;
