import React from 'react';
import { FormCity, InputCity, ButtonCity } from '../styles/Selector';

const CitySelector = ({ selectCity }) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    selectCity({city: evt.target.search.value.toLowerCase()})
  }; 
  return (
    <FormCity onSubmit={onSubmit}>
      <InputCity name="search" placeholder="madrid, miami, tokio..." />
      <ButtonCity>Buscar</ButtonCity>
    </FormCity>
  );
};

export default CitySelector;
