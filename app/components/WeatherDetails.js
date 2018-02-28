import React from "react";

class WeatherDetails extends React.Component {
  render() {
    const weather = this.props.weather;
    return (
      <div className="weather-detail" id="weather-detail">
        <p className="title">More information</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Pressure: {weather.pressure}hpa</p>
        <p>Highest Temperature: {weather.maxTemp}</p>
        <p>Lowest Temperature: {weather.minTemp}</p>
        <p>Wind Speed: {weather.windSpeed}m/s</p>
        <p>Clouds: {weather.cloud}%</p>
      </div>
    );
  }
}

export default WeatherDetails;
