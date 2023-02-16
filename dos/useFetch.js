import { useEffect, useState, useReducer } from 'react';

import {getCity} from './getCityData'



const useCities = ({city}) => {
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

  return { data, error, loading };
};

export default useCities;
 