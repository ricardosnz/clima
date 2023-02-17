import React from 'react';
import {Search} from './Icons'

const CitySelector = ({ searchInput, updateSearch, getWeathers }) => {

  const handleChange = ({target}) => {
    const newSearch = target.value
    updateSearch(newSearch)
    getWeathers({ search: newSearch })
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    getWeathers({ searchInput })
  };

  return (    
    <form onSubmit={onSubmit} className="form-city">
      <input name="search" className="form-city__input" placeholder="madrid, miami, tokio..." value={searchInput} onChange={handleChange} />
      <button className="form-city__button"><Search /></button>
    </form>
  );
};

export default CitySelector;


