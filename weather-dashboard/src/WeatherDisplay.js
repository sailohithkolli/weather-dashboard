import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = 'c15fd33eb97085d319dbe776669e5922'; // Replace with your actual API key
      const city = 'New York';

      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError(`Failed to fetch weather data: ${err.message}`);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const retryFetch = () => {
    setLoading(true);
    setError(null);
  };

  if (loading) return <div>Loading weather data...</div>;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={retryFetch}>Retry</button>
    </div>
  );
  if (!weatherData) return null;

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {Math.round(weatherData.main.temp)}°F</p>
      <p>Feels like: {Math.round(weatherData.main.feels_like)}°F</p>
      <p>Condition: {weatherData.weather[0].main}</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {Math.round(weatherData.wind.speed)} mph</p>
    </div>
  );
};

export default WeatherDisplay;