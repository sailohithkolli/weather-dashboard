import React, { useState } from 'react';
import CityInput from './cityinput';  // Updated import
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [city, setCity] = useState('');

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <CityInput setCity={setCity} />  {/* Updated component name */}
      {city && <WeatherDisplay city={city} />}
    </div>
  );
};

export default App;