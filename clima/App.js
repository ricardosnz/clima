import React from 'react';
import '../src/App.css';
import { Main } from './estilos';
import { List } from './estilos';

import CitySelector from './CitySelector';
import WeatherList from './WeatherList';
import WeatherCard from './WeatherCard';

import useWeather from './useWheather';

export default function App() {
  const { data:weathers, error, loading, city, selectCity } = useWeather();
  return (
    <Main>
      <Carta />
      <h1 className="weather__title">Encuentra el clima de tu ciudad</h1>
      <CitySelector selectCity={selectCity} />
      <h2>{city}</h2>
      {
        loading && !error ? <h2>Cargando...</h2> : 
        error && !loading ? <h2>Error: {error}. Reinicia la pagina</h2> :
        <List>
          {weathers?.map((weather, index) => <WeatherCard key={index} {...weather}/>)}
        </List>
      }
    </Main>
  );
}


const climaaa= {
  clouds: 41,
  dt: 1676923200,
  gust: 6,
  humidity: 28,
  pop: 0,
  pressure: 1017,
  temp: {
    day: 18.75,
    eve: 14.88,
    max: 18.75,
    min: 12.13,
    morn: 12.13,
    night: 13.66
  },
  weather: {
    description: "nubes dispersas",
    icon: "03d",
    id: 802,
    main: "Clouds"
  }
}

const Carta = () => (
  <article className="carta">
    <div className="carta__head">
      <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" className="carta__img" />
      <div className="carta__temp">
        <div className="carta__day">Thuesday</div>
        <h2 className="carta__day-graph">{climaaa.temp.day}°</h2>
        <h4 className="carta__resume">{climaaa.weather.main}</h4>
      </div>
    </div>
    <ul>
      
    </ul>
  </article>
)