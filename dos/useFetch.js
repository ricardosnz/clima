import { useEffect, useState } from 'react';



const getCity = async ({city}) => {
  try {
    const response = fetch(`${baseUrl}?q=${city}&cnt=5&appId=${apiKey}&units=metric&lang=es`)
    const json = response.json()
    return json
  }catch(error){
    return {error}
  }
}

const useFetch = ({city}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;    
    setLoading(true);
    getCity({city})
      .then(data => data.cod >= 400 ? setError(data.menssage) : setData(data))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
 