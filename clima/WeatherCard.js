import React from 'react';
import { Card } from '../styles/Card';

const WeatherCard = ({ temp, weather, dt, hum, gust, clouds, rain }) => {
  const { min, max, day, night, eve, morn } = temp;
  const { main: title, description, icon } = weather[0];
  const date = new Date(dt);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formatDate = `${day}/${month}/${year}`;

  return (
    <Card>
      <p>
        {formatDate} | dia {title}
      </p>
      <div className="item-temp">
        <div>
          <span>{Math.round(day)}°</span>{' '}
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />{' '}
        </div>
        <p>
          {rain && <span>{rain}mm x m2 lluvia</span>}{' '}
          <span>{gust} km/h viento</span>
        </p>
      </div>
      <p>
        {description}. Temperatura minima {Math.round(min)}° y temperatura
        maxima {Math.round(max)}°
      </p>
      <p>
        Humedad {hum}% | Nubes {clouds}%
      </p>
      <p>Temperatura del dia:</p>
      <div className="item-day">
        <p>Mañana {Math.round(morn)}°</p>
        <p>Tarde {Math.round(eve)}°</p>
        <p>Noche {Math.round(night)}°</p>
      </div>
    </Card>
  );
};
export default WeatherCard;
