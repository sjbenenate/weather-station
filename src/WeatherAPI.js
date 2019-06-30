import React, { Component } from "react";
import WeatherList from "./WeatherList.js";

const APIurl = "https://dark-sky.p.rapidapi.com/";
const APIhost = "dark-sky.p.rapidapi.com";
const APIkey = "7fcae583e6mshfb0a40746534038p145d17jsn4d0f57a7e898";
const APIoptions = "?lang=en&units=us";

let formatURL = coordinates => {
  return APIurl + coordinates[0] + "," + coordinates[1] + APIoptions;
};

let getCoordinates = city => {
  switch (city) {
    case "Portland, OR":
      return ["45.5155", "-122.6793"];
    case "Seattle, WA":
      return ["45.6062", "-122.3321"];
    case "Los Angeles, CA":
      return ["34.0522", "-118.2437"];
    case "Austin, TX":
      return ["30.2672", "-97.7431"];
    case "Denver, CO":
      return ["39.7392", "-104.9903"];
    default:
      return [];
  }
};

class WeatherAPI extends Component {
  constructor(props) {
    super(props);
    this.state = { weatherData: [], isLoading: true };
  }

  componentDidMount() {
    this.fetchWeather();
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.fetchWeather();
    }
  }

  fetchWeather() {
    this.setState({ isLoading: true });
    let url = formatURL(getCoordinates(this.props.city));
    fetch(url, {
      headers: {
        "X-RapidAPI-Host": APIhost,
        "X-RapidAPI-Key": APIkey
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          weatherData: data.daily,
          timeZone: data.timezone,
          isLoading: false
        })
      );
  }

  render() {
    var isLoading = this.state.isLoading;
    if (isLoading) {
      return <div className="loading">Loading...</div>;
    } else {
      return (
        <div>
          <WeatherList
            timeZone={this.state.timeZone}
            weatherData={this.state.weatherData}
          />
        </div>
      );
    }
  }
}

export default WeatherAPI;
