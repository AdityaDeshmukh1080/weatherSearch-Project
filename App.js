import React, { useState } from 'react';
import './App.css';

const api = {
  key: "ae26d4cd88945524f3ce9a1de333055d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');

  function searchPress() {
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }

  return (
    <div className="app">
      <input type="text"placeholder="Search Here"onChange={(e) => setSearch(e.target.value)}className="search-input"
      />
      <button className="search-btn" onClick={searchPress}>Search Weather</button>
   
      {typeof weather.main !== 'undefined' && (
        <div className="weather-info">
          <p className="place">Place: {weather.name}</p>
          <p className="temperature">Temperature: {weather.main.temp}°C</p>
          <p className="cloud-rain">Cloud/Rain: {weather.weather[0].main}</p>
          <p className="description">Description: {weather.weather[0].description}</p>
        </div>
      )}
     
    </div>
  );
};

export default App;