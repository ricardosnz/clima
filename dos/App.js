import React from 'react';
import './App.css';
import { Main } from './styles/main';

import CitySelector from './CitySelector';
import WeatherList from './WeatherList';

import useFetch from './hooks/useFetch';
import { apiKey, baseUrl } from './config';

// API Key: 00fa81f2b1b7c6d214d7e892c5ae966f
// Secret Key: ea1a25661eca869e66b2fa6c86cf6c2e

function App() {
  const { data, error, loading } = useFetch({ city });
  const [city, setCity] = useState('');

  const onSelectButtonClick = () =>
    setUrl(`${baseUrl}?q=${city}&cnt=5&appId=${apiKey}&units=metric&lang=es`);

  return (
    <Main>
      <CitySelector onSelectButton={onSelectButtonClick} />
      {error ? (
        <h2>Error: {error}. Reinicia la pagina</h2>
      ) : !data && inProgress ? (
        <h2>Loading...</h2>
      ) : !data ? null : (
        [
          <h2>{data.city.name.toUpperCase()}</h2>,
          <WeatherList weathers={data.list} />,
        ]
      )}
    </Main>
  );
}

export default App;
