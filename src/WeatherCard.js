import React from "react";

var WeatherCard = props => {
  return (
    <li className="weather-card" key={props.weather.id}>
      <h3>{props.weather.heading}</h3>
      <img src={props.weather.imgSrc} alt={props.weather.imgAlt} />
      <p>
        High: <span>{props.weather.high}</span> F
        <br />
        Low: <span>{props.weather.low}</span> F
        <br />
        Chance of Rain: <span>{props.weather.rain}</span>%
      </p>
    </li>
  );
};

export default WeatherCard;
