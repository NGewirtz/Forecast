import { cities } from "./cities";

export const getForecast = () => {
  const key = "22f5d5c959400267415dc9636f68f370";
  const cityIds = Object.values(cities).join(",");
  const url = `http://api.openweathermap.org/data/2.5/group?id=${cityIds}&APPID=${key}&units=imperial`;
  return $.get(url);
};

export const parseResponse = data => {
  const newState = [];
  data.list.forEach(city => {
    newState.push({
      name: city.name,
      temp: city.main.temp,
      humidity: city.main.humidity,
      description: city.weather[0].main,
      wind: city.wind.speed,
      icon: city.weather[0].icon,
      title: city.weather[0].description
    });
  });
  return newState;
};
