export default function fetchAPI(location) {
  return fetch(`http://localhost:3001/api/weather/${location}`)
    .then(res=>{return res.json()})
    .catch(error => console.error('Error:', error));
}
