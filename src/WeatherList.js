import React from "react";
import WeatherCard from "./WeatherCard.js";

var renderWeatherCard = weather => (
  <WeatherCard key={weather.time} weather={weather} />
);

/* uses array called weatherArray to pass in weather card information*/
var WeatherList = props => {
  console.log(props);
  var fiveDay = props.weatherData.data.slice(0, 5);
  var fiveDayElements = fiveDay.map(renderWeatherCard);
  return <ul className="weather-list">{fiveDayElements}</ul>;
};

export default WeatherList;
