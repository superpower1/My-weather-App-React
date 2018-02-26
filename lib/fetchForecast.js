export default function fetchForecast(location) {
  return fetch(`https://my-weather-app-server.herokuapp.com/api/forecast/${location}`)
    .then(res=>{return res.json()})
    .catch(error => console.error('Error:', error));
}
