import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {}
    }
  }

  componentDidMount() {
    const location = 'Melbourne';
    const key = OWM_API;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`)
      .then(res=>res.json())
      .then(res=>{
        console.log(res);
        this.setState({weather: res})
      })
  }

  render() {
    const weather = this.state.weather;
    return (
      <div>
        Weather api
        {
          weather.name?
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}</p>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=""/>
          </div>
          : <div>Loading...</div>
        }
      </div>
    );
  }
}

export default Weather;
