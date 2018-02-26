export default function fetchWeather(location) {
  return fetch(`https://my-weather-app-server.herokuapp.com/api/weather/${location}`)
    .then(res=>{return res.json()})
    .catch(error => console.error('Error:', error));
}
