
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = 'c15fd33eb97085d319dbe776669e5922';
      
      try {
        setLoading(true);
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError(`Failed to fetch weather data: ${err.response?.data?.message || err.message}`);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;
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