import React, { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';
import './PriceFilter';

const PriceFilter = () => {
  const { setPrice } = useContext(HouseContext);

  const prices = [
    { value: '200 - 300' },
    { value: '300 - 1100' },
    { value: '1100 - 1400' },
    { value: '1400 - 1700' },
    { value: '1700 - 2000' },
    { value: '2000 - 2300' },
  ];

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="dropdown">
      <select className="dropbtn" onChange={priceHandler}>
        <option value="" className='dropdown-content'>Select price</option>
        {prices.map((price, index) => (
          <option key={index} value={price.value}>
            {price.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
