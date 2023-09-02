import React, { useContext } from 'react';
import { SelectContext } from '../../context/SelectContext';
import { citiesCoords } from './InfoSelect';

const Select = () => {
  const { setSelectValue } = useContext(SelectContext);
  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <select name="cities" id="cities" defaultValue="default" onChange={handleChange}>
        <option value="default" disabled>Ciudades</option>
        {Object.keys(citiesCoords).map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </>
  );
};

export default Select;