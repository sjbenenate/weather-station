import React from "react";

var getWeekDay = UNIXtime => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var date = new Date(UNIXtime * 1000);
  return weekDays[date.getDay()];
};

var WeatherCard = props => {
  var imgSrc = "./img/" + props.weather.icon + ".png";
  var precip = Math.round(100 * props.weather.precipProbability);
  return (
    <li className="weather-card">
      <h3>{getWeekDay(props.weather.time)}</h3>
      <img src={imgSrc} alt={props.weather.icon} />
      <h4>{props.weather.summary}</h4>
      <p>
        High: <span>{Math.round(props.weather.temperatureMax)}</span> F
        <br />
        Low: <span>{Math.round(props.weather.apparentTemperatureMin)}</span> F
        <br />
        Chance of Rain: <span>{precip}</span>%
      </p>
    </li>
  );
};

export default WeatherCard;
