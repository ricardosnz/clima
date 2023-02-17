import React from 'react';

const CityContext = React.createContext()

const CityProvider = ({children}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgress] = useState(false);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if (!url) return;
    setInProgress(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInProgress(false);
        data.cod >= 400 ? setError(data.message) : setData(data);
      })
      .catch((error) => {
        setInProgress(false);
        setError(error);
      });
  }, [url]);




  return <CityContext.Provider value={{}}></ CityContext.Provider>
}