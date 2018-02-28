import React from "react"
import fetchWeatherRaw from '../../lib/fetchWeather'
import toFahrenheit from '../../lib/toFahrenheit'
import Wear from './Wear'
import Forecast from './Forecast'
import WeatherDetails from './WeatherDetails'
import 'babel-polyfill'


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      showDetails: false,
      mode: "c",
      weather: {}
    }
  }

  search() {
    const location = this.state.searchInput;

    console.log(location);

    const fetchWeather = async () => {
      const res = await fetchWeatherRaw(location);
      this.setState({weather: res});
      window.location.hash = '#current-city';
    }

    fetchWeather();
    this.props.showNav();
  }

  inputChange(e) {
    this.setState({searchInput: e.target.value})
  }

  showDetails(e) {
    this.setState({showDetails: e.target.checked}, ()=>{
      if (this.state.showDetails) {
        window.location.hash = '#weather-detail';
      } else {
        window.location.hash = '#current-city';
      }
    })

  }

  changeMode(e) {
    this.setState({mode: e.target.value})
  }

  render() {
    const weather = this.state.weather;
    return (
      <div>
        <div className="search" id="home">
          <h1 className="search-header"><span>Check</span> today's weather</h1>
          <span>Where are you: </span>

          <input className="text-input" type="text" placeholder="City name" onChange={this.inputChange.bind(this)}/>
          <button onClick={this.search.bind(this)} className="btn btn-primary">Check</button>
        </div>
        {
          weather.location &&
          <div className="current-city" id="current-city">
            <div>
              <span className="city-name">{weather.location}</span>
              <i className={`owf owf-${weather.imgId}`}></i>
              <img src={`http://openweathermap.org/img/w/${weather.imgId}.png`} alt=""/>
              <p className="show-temp">
                {
                  this.state.mode === 'f' ?
                  toFahrenheit(weather.temp) + ' °F' :
                  weather.temp + " °C"
                }
              </p>
            </div>

            <div>
              <input type="radio" id="temp-mode1"
                name="temp-mode"
                value="c"
                onChange={this.changeMode.bind(this)}
               />
              <label htmlFor="temp-mode1">Celcius</label>

              <input type="radio" id="temp-mode2"
                name="temp-mode"
                value="f"
                onChange={this.changeMode.bind(this)}
              />
              <label htmlFor="temp-mode2">Farenheit</label>
            </div>

            <div>
              <input type="checkbox" id="details" name="showDetails"
                onChange={this.showDetails.bind(this)}
              />
              <label htmlFor="details">Show details</label>
            </div>
            <Wear temp={weather.temp}/>
          </div>
        }
        {
          this.state.showDetails && weather.location &&
          <WeatherDetails weather={weather}/>
        }
        {
          weather.location && weather.forecast &&
          <Forecast data={weather.forecast} mode={this.state.mode}/>
        }
      </div>
    );
  }
}

export default Weather;
