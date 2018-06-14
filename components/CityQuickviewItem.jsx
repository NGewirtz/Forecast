import React from 'react';
import { Link } from 'react-router-dom';

const CityQuickviewItem = ({forecast}) => {
  return (
    <li className="quickview-item">
      <h2><Link to={forecast.name}>{forecast.name}</Link></h2>
      <h4>{forecast.temp} F</h4>
      <img src={`http://openweathermap.org/img/w/${forecast.icon}.png`}/>
    </li>
  );
};

export default CityQuickviewItem;
