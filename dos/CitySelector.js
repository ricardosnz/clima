import React, { useState } from 'react';
import { FormCity, InputCity, ButtonCity } from '../styles/Selector';

const CitySelector = ({ onSelectButton }) => {
  const [cityValue, setCityValue] = useState(null);
  const onSubmitCity = (e) => {
    e.preventDefault();
    onSelectButton(city);
  }; 
  return (
    <>
      <h1>Escribe tu ciudad</h1>
      <FormCity onSubmit={onSubmitCity}>
        <InputCity
          type="text"
          value={cityValue}
          placeholder="Madrid..."
          onChange={(e) => setCityValue(e.target.value)}
        />
        <ButtonCity>Buscar</ButtonCity>
      </FormCity>
    </>
  );
};

export default CitySelector;
