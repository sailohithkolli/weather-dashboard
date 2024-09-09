import React from 'react';
import WeatherDisplay from './WeatherDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <WeatherDisplay />
      </header>
    </div>
  );
}

export default App;