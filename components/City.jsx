import React from 'react';

const City = ({forecast}) => {
  return (
    <div>
      <h2>{forecast.name}</h2>
      <h4>{forecast.description}</h4>
    </div>
  );
};

export default City;
