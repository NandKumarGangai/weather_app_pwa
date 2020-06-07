import React, { useState } from 'react';
import { fetchWeatherData } from './api/fetchData';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    if (e.key === 'Enter' && query.trim()) {
      const data = await fetchWeatherData(query);
      console.log(data);
      setWeather(data);
    }
  }

  return (
    <div className='main-container'>
      <div>
        <input
          type='text'
          className='search'
          onChange={e => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {
        weather.main &&
        (
          <div className='city'>
            <div className='city-name'>
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </div>
            <div className='city-temp'>
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className='info'>
              <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
