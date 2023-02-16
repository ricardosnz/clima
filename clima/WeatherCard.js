import React from 'react';
import { Card } from '../src/styles/Card';
import {Speed, Cloud, Humidity, Rain} from './Icons'


const WeatherCard = ({ temp, weather, dt, humidity, speed, clouds, rain }) => {
  const date = new Date(dt*1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formatDate = `${day}/${month}/${year}`;



  return (
    <article className="weather">
    <div className="weather__head">
      <picture className="weather__container-img">
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="" className="weather__img" />
      </picture>
      <div className="weather__resume">
        <h4 className="weather__day">Thuesday</h4>
        <h2 className="weather__general-temp">{temp.day}°C</h2>
        <h4 className="weather__description">{weather.description}</h4>
        <h4 className="weather__minmax">H:{temp.max}° L:{temp.min}°</h4>
      </div>
    </div>
    <ul className="weather__temp">
      <li className="weather__item">
        <Speed />
        <h3 className="weather__per">{speed}km/h</h3>
        <h4 className="weather__subtitle">Speed</h4>
      </li>
      {rain && 
        <li className="weather__item">
          <Rain />
          <h3 className="weather__per">{rain}%</h3>
          <h4 className="weather__subtitle">Rain</h4>
        </li>
      }      
      <li className="weather__item">
        <Cloud />
        <h3 className="weather__per">{clouds}%</h3>
        <h4 className="weather__subtitle">Clouds</h4>
      </li>
      <li className="weather__item">
        <Humidity/>
        <h3 className="weather__per">{humidity}%</h3>
        <h4 className="weather__subtitle">Humidity</h4>
      </li>
    </ul>
  </article>
  );
};
export default WeatherCard;
