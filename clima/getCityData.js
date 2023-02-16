import { apiKey, baseUrl } from './config'

export const getCity = async ({city}) => {
  const response = await fetch(`${baseUrl}?q=${city}&cnt=6&appId=${apiKey}&units=metric&lang=es`)
  const json = await response.json()
  const { list } = json
  if(!list) throw 'No encuentro la ciudad'
  console.log(list)
  const data = list?.map(({deg, feels_like, gust, pop, pressure, sunrise, sunset, ...rest}) => ({...rest}))
  return data
}
// 
const climaaa= { 
  clouds: 41,
  dt: 1676923200,
  humidity: 28,
  rain: 20,
  speed: 40,
  temp: {
    day: 18.75,
    max: 18.75,
    min: 12.13,
  },
  weather: {
    description: "nubes dispersas",
    icon: "03d",
  }
}
// https://api.openweathermap.org/data/2.5/forecast/daily?q=madrid&cnt=5&appId=0ef3791cdd604bb0d202c7c6071c871a&units=metric&lang=es
