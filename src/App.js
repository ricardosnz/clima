import React from 'react';
import '../src/App.css';

import useWeather from './hooks/useWheather';

import CitySelector from './components/CitySelector';
import WeatherCard from './components/WeatherCard';
import Loading from './components/Loading';

export default function App() {
  const { weathers, error, loading, image, searchInput, updateSearch, getWeathers } =
    useWeather();

  return (
    <div className="app">
      <img src={image} alt="" className="app__background" />
      <CitySelector
        searchInput={searchInput}
        updateSearch={updateSearch}
        getWeathers={getWeathers}
      />
      {
        loading && !error ? <Loading /> : 
        weathers ?  
          <ul className="app__weather ">
            {weathers?.map((weather, index) => <WeatherCard key={index} {...weather}/>)}
          </ul> : 
          <h2>{error}</h2>      
      }
    </div>
  );
}
