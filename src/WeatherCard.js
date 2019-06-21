import React from "react";

var WeatherCard = props => {
  var imgSrc = "./img/" + props.weather.icon + ".png";

  return (
    <li className="weather-card">
      <h3>{props.weather.summary}</h3>
      <img src={imgSrc} alt={props.weather.icon} />
      <p>
        High: <span>{Math.round(props.weather.temperatureMax)}</span> F
        <br />
        Low: <span>{Math.round(props.weather.apparentTemperatureMin)}</span> F
        <br />
        Chance of Rain: <span>{100 * props.weather.precipProbability}</span>%
      </p>
    </li>
  );
};

export default WeatherCard;
