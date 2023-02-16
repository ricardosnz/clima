import { apiKey, baseUrl } from './config'

export const getCity = async ({city}) => {
  try {
    const response = await fetch(`${baseUrl}?q=${city}&cnt=5&appId=${apiKey}&units=metric&lang=es`)
    const json = await response.json()
    return json.list
  }catch(error){
    return {error}
  }
}

const responseTo = (data) => {
  const {} = data
}

// https://api.openweathermap.org/data/2.5/forecast/daily?q=madrid&cnt=5&appId=0ef3791cdd604bb0d202c7c6071c871a&units=metric&lang=es
