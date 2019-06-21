import React, { Component } from "react";

const APIurl = "https://dark-sky.p.rapidapi.com/";
const APIhost = "dark-sky.p.rapidapi.com";
const APIkey = "7fcae583e6mshfb0a40746534038p145d17jsn4d0f57a7e898";
const APIoptions = "?lang=en&units=us";

let formatRequest = coordinates => {
  return APIurl + coordinates[0] + "," + coordinates[1] + APIoptions;
};

let getCoordinates = city => {
  var coord = ["0", "0"];
  if (city === "Portland, OR") {
    coord = ["45.5155", "-122.6793"];
  } else if (city === "Seattle, WA") {
    coord = ["47.6062", "-122.3321"];
  } else {
    coord = ["100", "100"];
  }
  return coord;
};

class WeatherAPI extends Component {
  state = { daily: {}, isLoading: false };

  componentDidMount() {
    this.setState({ loading: true });
    let url = formatRequest(getCoordinates(this.props.city));

    fetch(url, {
      headers: {
        "X-RapidAPI-Host": APIhost,
        "X-RapidAPI-Key": APIkey //it can be iPhone or your any other attribute
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ daily: data.daily, isLodaing: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <div className="loading">Loading...</div>;
    } else {
      return <div>{this.state.daily.summary}</div>;
    }
  }
}

export default WeatherAPI;
