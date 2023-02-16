import React from 'react';
import './App.css';
import { Main } from './styles/main';
import { List } from './styles/List';

import CitySelector from './CitySelector';
import WeatherList from './WeatherList';
import WeatherCard from './WeatherCard';

import useWeather from './useWeather';

export default function App() {
  const { data:weathers, error, loading, city, selectCity } = useWeather();
  return (
    <Main>
      <CitySelector selectCity={selectCity} />
      <h2>{city}</h2>
      {
        loading && !error ? <h2>Cargando...</h2> : 
        error && !loading ? <h2>Error: {error}. Reinicia la pagina</h2> :
        <List>
          {Array.from(weathers, (weather, index) => <WeatherCard key={index} {...weather}/>)}
        </List>
      }
    </Main>
  );
}

