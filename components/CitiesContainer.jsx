import React from 'react';
import City from './City';

const CitiesContainer = ({forecasts}) => {
  const cities = forecasts.map( forecast => {
    return <City forecast={forecast} key={forecast.name} />;
  });

  return (
    <section>
      <ul>
        {cities}
      </ul>
    </section>
  );
};

export default CitiesContainer;
