import React from 'react';

const CityShow = ({forecast}) => {
  return (
    <div>
      <h2>{forecast.name}</h2>
      <img src={`http://openweathermap.org/img/w/${forecast.icon}.png`}/>
      <h4>{forecast.description}</h4>
      <h4>Temperature {forecast.temp} F</h4>
      <h4>Humidity {forecast.humidity}</h4>
      <h4>Wind {forecast.wind}</h4>
    </div>
  );
};

export default CityShow;
