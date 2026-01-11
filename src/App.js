import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import Hourly from './components/hourly/hourly';
import Forecast from './components/forecast/forecast';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';

function App() {
  const [currWeather, setCurrWeather] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currWeatherFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const hourlyFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currWeatherFetch, hourlyFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const hourlyResponse = await response[1].json();
        const forecastResponse = await response[2].json();
        
        setCurrWeather({city: searchData.label, ...weatherResponse});
        setHourly({city: searchData.label, ...hourlyResponse});
        setForecast({city: searchData.label, ...forecastResponse});
      })
      .catch(console.log);
  }

  console.log(currWeather);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currWeather && <CurrentWeather data={currWeather}/> }
      {hourly && <Hourly data={hourly}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
