import React from 'react';
import WeatherCard from './WeatherCard';

import { List } from '../styles/List';

const WeatherList = ({ weathers }) => {  
  return (
    <List>
      {Array.from(weathers, (weather, index) => <WeatherCard key={index} {...weather}/>)}
    </List>
  );
};

export default WeatherList;
