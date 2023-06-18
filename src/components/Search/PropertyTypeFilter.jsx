import React, { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';
import './PropertyTypeFilter.css';

const PropertyTypeFilter = () => {
  const { setProperty, properties } = useContext(HouseContext);

  const propertyTypeHandler = (e) => {
    setProperty(e.target.value);
  };

  return (
    <div className="dropdown">
      <select className="dropbtn" onChange={propertyTypeHandler}>
        <option value="" className='dropdown-content'>Select type</option>
        {properties.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PropertyTypeFilter;
