import React from "react";

const APIurl = "https://dark-sky.p.rapidapi.com/";
const APIhost = "dark-sky.p.rapidapi.com";
const APIkey = "7fcae583e6mshfb0a40746534038p145d17jsn4d0f57a7e898";

let formatRequest = coordinates => {
  return APIurl + coordinates[0] + "," + coordinates[1];
};

let getCoordinates = city => {
  var coord = ["0", "0"];
  if (city === "Portland, OR") {
    coord = ["45.5155", "122.6793"];
  } else if (city === "Seattle, WA") {
    coord = ["47.6062", "122.3321"];
  } else {
    coord = ["100", "100"];
  }
  return coord;
};

var WeatherAPI = props => {
  let url = formatRequest(getCoordinates(props.city));

  fetch(url, {
    headers: {
      "X-RapidAPI-Host": APIhost,
      "X-RapidAPI-Key": APIkey //it can be iPhone or your any other attribute
    }
  })
    .then(response => response.json())
    .then(data => console.log(data));

  console.log(props);
  console.log(formatRequest(getCoordinates(props.city)));

  return <div>This is funny, no weather found</div>;
};

export default WeatherAPI;
