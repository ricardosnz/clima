import { useEffect, useState, useCallback } from 'react';
import { cityImages } from './constants';
import { searchWeather } from './getCityData';
import debounce from 'just-debounce-it';

const useWeather = () => {
  const localStorageCity = localStorage.getItem('city') || "madrid"

  const [searchInput, setSearchInput] = useState(localStorageCity);
  const [weathers, setWeathers] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 

  const [image, setImage] = useState(cityImages[0].url);

  const getWeathers = useCallback(
    debounce(({ search }) => {
      setLoading(true);
      setError('');
      searchWeather({ city: search })
        .then(setWeathers)
        .catch(setError)
        .finally(() => setLoading(false));

      localStorage.setItem('city', search);
      console.log(search);
      const updateImage =
        cityImages[Math.round(Math.random() * cityImages.length - 1)].url;
      setImage(updateImage);
    }, 800),
    []
  );

  useEffect(() => {
    getWeathers({ search: searchInput });
  }, []);

  return {
    weathers,
    error,
    loading,
    searchInput,
    updateSearch: setSearchInput,
    getWeathers,
    image,
  };
};

export default useWeather;