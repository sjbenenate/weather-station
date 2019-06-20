import React, { Component } from "react";
import ReactDOM from "react-dom";
import WeatherList from "./WeatherList.js";
import UserInput from "./UserInput.js";

import "./styles.css";

var weatherArray = [
  {
    id: 1,
    high: 95,
    low: 32,
    rain: 0,
    heading: "Balmy Evening",
    imgSrc: "./img/icon-all-cloudy.png",
    imgAlt: "Weather picture"
  },
  {
    id: 2,
    high: 55,
    low: 20,
    rain: 20,
    heading: "Ice Day",
    imgSrc: "./img/icon-sunny.png",
    imgAlt: "Weather picture"
  }
];

class App extends Component {
  state = { city: "Portland, OR" };

  updateCity = newCity => {
    this.setState({ city: newCity });
  };

  render() {
    return (
      <div className="App">
        <h1 id="page-title">Sarah's Weather Station</h1>
        <h2>
          5 Day Forecast in <strong>{this.state.city}</strong>
        </h2>
        <UserInput updateCity={this.updateCity} />
        <WeatherList weatherArray={weatherArray} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
