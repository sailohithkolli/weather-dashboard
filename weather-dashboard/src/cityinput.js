import React, { useState } from 'react';

const CityInput = ({ setCity }) => {
  const [inputCity, setInputCity] = useState('');

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputCity);
  };

  return (
    <div className="container">
      <h2>Enter your city</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputCity}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default CityInput;