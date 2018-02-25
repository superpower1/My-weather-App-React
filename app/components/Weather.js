import React from "react"
import fetchAPI from '../../lib/fetchAPI'
import dataProcess from '../../lib/dataProcess'
import Forecast from './Forecast'
import 'babel-polyfill'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      showDetails: false,
      mode: "",
      weather: {}
    }
  }

  search() {
    const location = this.state.searchInput;

    console.log(location);

    const fetchData = async () => {
      const res = await fetchAPI(location);
      const processedData = dataProcess(res);
      this.setState({weather: processedData});
    }
    fetchData();
  }

  inputChange(e) {
    this.setState({searchInput: e.target.value})
  }

  showDetails(e) {
    this.setState({showDetails: e.target.checked})
  }

  changeMode(e) {
    this.setState({mode: e.target.value})
  }

  render() {
    const weather = this.state.weather;
    return (
      <div>
        Weather api

        <input type="text" onChange={this.inputChange.bind(this)}/>
        <div>
          <input type="checkbox" id="details" name="showDetails"
            onChange={this.showDetails.bind(this)}
          />
          <label htmlFor="details">Show details</label>
        </div>

        <div>
          <input type="radio" id="contactChoice1"
            name="contact"
            value="c"
            onChange={this.changeMode.bind(this)}
           />
          <label htmlFor="contactChoice1">Celcius</label>

          <input type="radio" id="contactChoice2"
            name="contact"
            value="f"
            onChange={this.changeMode.bind(this)}
          />
          <label htmlFor="contactChoice2">Farenheit</label>
        </div>
        <button onClick={this.search.bind(this)}>Check</button>
        {
          weather.location &&
          <div>
            <p>{weather.location}</p>
            <p>{weather.temp}</p>
            <img src={`http://openweathermap.org/img/w/${weather.imgId}.png`} alt=""/>
          </div>
        }
        {
          this.state.showDetails && weather.location &&
          <div>
            <p>Humidity: {weather.humidity}%</p>
            <p>Pressure: {weather.pressure}hpa</p>
            <p>Highest Temperature: {weather.maxTemp}</p>
            <p>Lowest Temperature: {weather.minTemp}</p>
            <p>Wind Speed: {weather.windSpeed}m/s</p>
            <p>Clouds: {weather.cloud}%</p>
          </div>
        }
        <Forecast/>
      </div>
    );
  }
}

export default Weather;
