import React from "react";
import WeatherCard from "./WeatherCard.js";

var renderWeatherCard = weather => (
  <WeatherCard key={weather.id} weather={weather} />
);

/* uses array called weatherArray to pass in weather card information*/
var WeatherList = props => {
  var weatherList = props.weatherArray.map(renderWeatherCard);
  return <ul className="weather-list">{weatherList}</ul>;
};

export default WeatherList;
