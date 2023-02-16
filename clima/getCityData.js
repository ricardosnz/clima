import { apiKey, baseUrl } from './config'

export const getCity = async ({city}) => {
  try {
    const response = await fetch(`${baseUrl}?q=${city}&cnt=5&appId=${apiKey}&units=metric&lang=es`)
    const json = await response.json()
    const { list } = json
    if(!list) throw new Error('No hay resultados')
    const { deg, feels_like, presure, speed, sunrise, sunset, ...rest } = data
    return rest
  }catch(error){
    return {error}
  }
}

// https://api.openweathermap.org/data/2.5/forecast/daily?q=madrid&cnt=5&appId=0ef3791cdd604bb0d202c7c6071c871a&units=metric&lang=es
