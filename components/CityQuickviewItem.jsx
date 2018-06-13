import React from 'react';

const CityQuickviewItem = ({forecast}) => {
  return (
    <div className="quickview-div">
      <h2>{forecast.name}</h2>
      <h4>{forecast.temp} F</h4>
      <img src={`http://openweathermap.org/img/w/${forecast.icon}.png`}/>
    </div>
  );
};

export default CityQuickviewItem;
