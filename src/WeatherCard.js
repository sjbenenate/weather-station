import React from "react";

var getWeekDay = (UNIXtime, timeZone) => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  //  https://stackoverflow.com/questions/17478086/chrome-timezone-option-to-date-tolocalestring
  // get local date as string, convert to unix time to use getDay() method
  var UNIXlocalDate = new Date(
    new Date(UNIXtime * 1000).toLocaleString("en-US", { timeZone: timeZone })
  );
  return weekDays[UNIXlocalDate.getDay()];
};

var WeatherCard = props => {
  var imgSrc = "./img/" + props.weather.icon + ".png";
  var precip = Math.round(100 * props.weather.precipProbability);
  return (
    <li className="weather-card">
      <h3>{getWeekDay(props.weather.time, props.timeZone)}</h3>
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
