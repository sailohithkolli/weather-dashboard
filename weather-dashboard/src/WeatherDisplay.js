import React from 'react';

const WeatherDisplay = () => {
  // Hardcoded weather data for now
  const weatherData = {
    city: 'New York',
    temperature: 72,
    condition: 'Sunny'
  };

  return (
    <div>
      <h2>Weather in {weatherData.city}</h2>
      <p>Temperature: {weatherData.temperature}°F</p>
      <p>Condition: {weatherData.condition}</p>
    </div>
  );
};

export default WeatherDisplay;