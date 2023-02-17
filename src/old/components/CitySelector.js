import React, { useState } from 'react';
import { FormCity, InputCity, ButtonCity } from '../styles/Selector';

const CitySelector = ({ onSelectButtonClick }) => {
  const [city, setCity] = useState(null);
  const onSubmitCity = (e) => {
    e.preventDefault();
    onSelectButtonClick(city);
  };
  return (
    <>
      <h1>Escribe tu ciudad</h1>
      <FormCity onSubmit={onSubmitCity}>
        <InputCity
          type="text"
          value={city}
          placeholder="Madrid..."
          onChange={(e) => setCity(e.target.value)}
        />
        <ButtonCity>Buscar</ButtonCity>
      </FormCity>
    </>
  );
};

export default CitySelector;
