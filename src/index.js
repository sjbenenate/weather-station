import React from "react";
import ReactDOM from "react-dom";
import WeatherList from "./WeatherList.js";

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

function App() {
  return (
    <div className="App">
      <h1>Sarah's Weather Station</h1>
      <h2>5 Day Forecast</h2>
      <WeatherList weatherArray={weatherArray} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
