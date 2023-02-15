import React from 'react';
import { Card } from '../styles/Card';

const WeatherCard = (props) => {
  const {
    min,
    max,
    day,
    night,
    eve,
    morn,
    dt,
    hum,
    gust,
    clouds,
    rain,
    main,
    icon,
    descrip,
  } = props;
 
  const date = new Date(dt);

  return (
    <Card>
      <p>
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()} | dia {main}
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
        {descrip}. Temperatura minima {Math.round(min)}° y temperatura maxima{' '}
        {Math.round(max)}°
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
