import React from 'react';

const CityShow = ({forecast}) => {
  const skylineImg = `assets/${forecast.name.toLowerCase()}.jpg`;
  return (
    <main>
      <div className="city-show-div">
        <h1>{forecast.name}</h1>
        <img src={`http://openweathermap.org/img/w/${forecast.icon}.png`}
          title={forecast.title}
        />
        <h3>{forecast.description}</h3>
        <h3>Temperature: {forecast.temp} F</h3>
        <h3>Humidity: {forecast.humidity} %</h3>
        <h3>Wind: {forecast.wind} MPH</h3>
      </div>
      <div>
        <img className="skyline" src={skylineImg}/>
      </div>
    </main>
  );
};

export default CityShow;
