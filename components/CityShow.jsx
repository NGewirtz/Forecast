import React from 'react';

const CityShow = ({forecast}) => {
  return (
    <div className="city-show-div">
      <h1>{forecast.name}</h1>
      <img src={`http://openweathermap.org/img/w/${forecast.icon}.png`}/>
      <h3>{forecast.description}</h3>
      <h3>Temperature {forecast.temp} F</h3>
      <h3>Humidity {forecast.humidity}</h3>
      <h3>Wind {forecast.wind}</h3>
    </div>
  );
};

export default CityShow;
