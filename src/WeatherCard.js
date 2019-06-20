import React, { Component } from "react";

class WeatherCard extends Component {
  render() {
    return (
      <li className="weather-card" key={this.props.weather.id}>
        <h3>{this.props.weather.heading}</h3>
        <img src={this.props.weather.imgSrc} alt={this.props.weather.imgAlt} />
        <p>
          High: <span>{this.props.weather.high}</span> F
          <br />
          Low: <span>{this.props.weather.low}</span> F
          <br />
          Chance of Rain: <span>{this.props.weather.rain}</span>%
        </p>
      </li>
    );
  }
}

export default WeatherCard;
