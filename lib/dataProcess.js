export default function dataProcess(weatherRaw) {
	if (!weatherRaw.name) {
		throw new Error('Invalid Data');
	}
	return {
		location: weatherRaw.name,
		temp: weatherRaw.main.temp,
		humidity: weatherRaw.main.humidity,
		pressure: weatherRaw.main.pressure,
		maxTemp: weatherRaw.main.temp_max,
		minTemp: weatherRaw.main.temp_min,
		windSpeed: weatherRaw.wind.speed,
		cloud: weatherRaw.clouds.all,
		imgId: weatherRaw.weather[0].icon
	}
}
