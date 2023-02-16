import { useEffect, useState, useReducer } from 'react';

import {getCity} from './getCityData'

const useWeather = (initialCity) => {
  const localStorageCity = localStorage.getItem('city') || "madrid"

  const [city, setCity] = useState(localStorageCity)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectCity = ({ city }) => {
    setCity(city)
    localStorage.setItem("city", city)
  }

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    getCity({city})
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [city])
  

  return { data, error, loading, city, selectCity };
};

export default useWeather;
 