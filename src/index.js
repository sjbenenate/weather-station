import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserInput from "./UserInput.js";
import WeatherAPI from "./WeatherAPI.js";
import ErrorBoundary from "./ErrorBoundary.js";

import "./styles.css";

// weather API  https://rapidapi.com/darkskyapis/api/dark-sky

class App extends Component {
  state = { city: "Portland, OR" };

  updateCity = newCity => {
    this.setState({ city: newCity });
  };

  render() {
    return (
      <div className="App">
        <h1 id="page-title">Sarah's Weather Station</h1>
        <h2>
          5 Day Forecast in <strong>{this.state.city}</strong>
        </h2>
        <UserInput updateCity={this.updateCity} />
        <ErrorBoundary>
          <WeatherAPI city={this.state.city} />
        </ErrorBoundary>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
