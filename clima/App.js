import React from 'react';
import '../src/App.css';
import { Main } from './estilos';
import { List } from './estilos';

import CitySelector from './CitySelector';
import WeatherList from './WeatherList';
import WeatherCard from './WeatherCard';
import {Speed, Rain, Cloud, Humidity} from './Icons'

import useWeather from './useWheather';

export default function App() {
  const { data:weathers, error, loading, city, selectCity } = useWeather();

  return (
    <Main>
      <Carta />
      <Carta />
      <h1 className="weather__title">Encuentra el clima de tu ciudad</h1>
      <CitySelector selectCity={selectCity} />
      <h2>{city}</h2>
      {
        loading && !error ? <h2>Cargando...</h2> : 
        error && !loading ? <h2>{error}</h2> :
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
  humidity: 28,
  rain: 20,
  speed: 40,
  temp: {
    day: 18.75,
    max: 18.75,
    min: 12.13,
  },
  weather: {
    description: "nubes dispersas",
    icon: "03d",
  }
}



// // wind rain humidity
// speed, clouds, rain, humidity
const Carta = () => (
  <article className="weather">
    <div className="weather__head">
      <picture className="weather__container-img">
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="" className="weather__img" />
      </picture>
      <div className="weather__resume">
        <h4 className="weather__day">Thuesday</h4>
        <h2 className="weather__general-temp">{climaaa.temp.day}°C</h2>
        <h4 className="weather__description">{climaaa.weather.description}</h4>
        <h4 className="weather__minmax">H:{climaaa.temp.max}° L:{climaaa.temp.min}°</h4>
      </div>
    </div>
    <ul className="weather__temp">
      <li className="weather__item">
        <Speed />
        <h3 className="weather__per">{climaaa.speed}km/h</h3>
        <h4 className="weather__subtitle">Speed</h4>
      </li>
      <li className="weather__item">
        <Rain />
        <h3 className="weather__per">{climaaa.rain}%</h3>
        <h4 className="weather__subtitle">Rain</h4>
      </li>
      <li className="weather__item">
        <Cloud />
        <h3 className="weather__per">{climaaa.clouds}%</h3>
        <h4 className="weather__subtitle">Clouds</h4>
      </li>
      <li className="weather__item">
        <Humidity/>
        <h3 className="weather__per">{climaaa.humidity}%</h3>
        <h4 className="weather__subtitle">Humidity</h4>
      </li>
    </ul>
  </article>
)