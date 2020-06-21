import React, { Component } from "react";
import "./Forecast.css";

export default class Forecast extends Component {
  render() {
    return (
      <div className="forecastWrapper">
        <div className="forecastHeader">Forecast</div>
        <div className="forecastLine"></div>
        <div className="forecastValues">
          <div className="valuesLeft">{this.props.temperature}°f</div>
          <div className="valuesRight">
            <div className="precipitation">
              Precipitation: {this.props.precipitation}%
            </div>
            <div className="humidity">Humidity: {this.props.humidity}%</div>
          </div>
        </div>
      </div>
    );
  }
}
