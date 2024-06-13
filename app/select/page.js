'use client'
import React, { useState } from 'react';

const page = () => {
  const [cities, setCities] = useState([]);

  const handleCityChange = (event) => {
    const selectedOptions = event.target.selectedOptions;
    const selectedCities = Array.from(selectedOptions).map(option => option.value);
    setCities(prevCities => { 
      const newCities = [...prevCities];
      selectedCities.forEach(city => {
        if (!newCities.includes(city)) {
          newCities.push(city);
        }
      });
      return newCities;
    });
  };

  return (
    <div>
      <h2>Please select cities</h2>
      <select
        multiple
        value={cities} // Bind the selected cities array to the value attribute
        onChange={handleCityChange} // Call the handleCityChange function on change
        style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
      >
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Gujrat">Gujrat</option>
        {/* Add more options as needed */}
      </select>
      <div>
        Selected cities: {cities.join(', ')}
      </div>
    </div>
  );
};

export default page;
