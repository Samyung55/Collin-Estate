import React, { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';
import './LocationFilter.css';

const LocationFilter = () => {
  const { setCountry, countries } = useContext(HouseContext);

  const locationHandler = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="dropdown">
      <select className="dropbtn" onChange={locationHandler}>
        <option className="dropdown-content" value="">Select country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationFilter;
