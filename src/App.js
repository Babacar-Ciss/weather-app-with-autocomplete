
import './App.css';

import { useState } from 'react';
import CurrentWheather from './components/CurrentWheather/CurrentWheather';
import Search from './components/Search/Search';
import Forecast from './components/Forecasts/Forecast';
import {WEATHER_API_KEY, WEATHER_API_URL} from "./api"

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
   const [lat, lon] = searchData.value.split(" ");
   const currentWeaterFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`) 

   const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

  Promise.all([currentWeaterFetch, forecastFetch])
    .then (async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
    
      setCurrentWeather({city: searchData.label ,...weatherResponse});
      setForecast({city: searchData.label, ...forecastResponse});
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="Container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWheather data={currentWeather} /> }
      {forecast &&  <Forecast data={forecast}/>}
      
     
    </div>
  );
}

export default App;
