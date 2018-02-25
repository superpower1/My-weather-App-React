export default function fetchForecast(location) {
  return fetch(`http://localhost:3001/api/forecast/${location}`)
    .then(res=>{return res.json()})
    .catch(error => console.error('Error:', error));
}
