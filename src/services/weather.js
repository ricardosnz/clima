import { apiKey, baseUrl } from './config';

export const searchWeather = async ({ city }) => {
  const response = await fetch(
    `${baseUrl}?q=${city}&cnt=6&appId=${apiKey}&units=metric`
  );
  const json = await response.json();
  const { list } = json;
  if (!list) throw 'No Found';
  const data = list?.map(
    ({ deg, feels_like, gust, pop, pressure, sunrise, sunset, ...rest }) => ({
      ...rest,
    })
  );
  console.log({ city, data });
  return data;
};
