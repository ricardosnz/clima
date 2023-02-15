import React from 'react';
import WeatherCard from './WeatherCard';

import { List } from '../styles/List';

const WeatherList = ({ weathers }) => {
  return (
    <>
    <List>
      {weathers.map(
        ({ temp, weather, dt, humidity, clouds, rain, gust, pop}, index) => {
          const { min, max, day, night, eve, morn} = temp;
          const { main, description, icon } = weather[0];

          return (
            <li key={index}>
              <WeatherCard
                min={min}
                max={max}
                day={day}
                night={night}
                eve={eve}
                morn={morn}
                dt={dt * 1000}
                hum={humidity}
                pop={pop}
                gust={gust}
                clouds={clouds}
                rain={rain}
                main={main}
                icon={icon}
                descrip={description}
              />
            </li>
          );
        }
      )}
    </List>
    </>
  );
};

export default WeatherList;
