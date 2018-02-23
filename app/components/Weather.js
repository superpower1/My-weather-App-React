import React from "react";

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
    const {showDetails, mode} = this.state;
    console.log(location);
    console.log(showDetails);
    console.log(mode);
    const key = OWM_API;
    let units = "";
    if (mode === 'c') {
      units = "&units=metric&"
    } else if (mode === 'f') {
      units = "&units=imperial&"
    } else {
      units = ""
    }
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&${units}appid=${key}`)
      .then(res=>res.json())
      .then(res=>{
        console.log(res);
        this.setState({weather: res})
      })
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
          weather.name &&
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}</p>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=""/>
          </div>
        }
        {
          this.state.showDetails && weather.name &&
          <div>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Pressure: {weather.main.pressure}hpa</p>
            <p>Highest Temperature: {weather.main.temp_max}</p>
            <p>Lowest Temperature: {weather.main.temp_min}</p>
            <p>Wind Speed: {weather.wind.speed}m/s</p>
            <p>Clouds: {weather.clouds.all}%</p>
          </div>
        }
      </div>
    );
  }
}

export default Weather;
