import { useEffect, useState, useReducer } from 'react';

import {getCity} from './getCityData'

const useWeather = ({initialCity= 'madrid'}) => {
  const [city, setCity] = useState(initialCity)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    getCity({city})
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [city]);

  
  return { data, error, loading, city, selectCity: ({city}) => setCity(city) };
};

export default useWeather;
 