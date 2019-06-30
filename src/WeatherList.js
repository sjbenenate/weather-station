import React from "react";
import WeatherCard from "./WeatherCard.js";

/* uses array called weatherArray to pass in weather card information*/
class WeatherList extends React.Component {
  renderWeatherCard = weather => (
    <WeatherCard
      key={weather.time}
      weather={weather}
      timeZone={this.props.timeZone}
    />
  );

  render() {
    var fiveDay = this.props.weatherData.data.slice(0, 5);
    var fiveDayElements = fiveDay.map(this.renderWeatherCard);
    return <ul className="weather-list">{fiveDayElements}</ul>;
  }
}

export default WeatherList;
