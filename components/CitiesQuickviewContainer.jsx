import React from 'react';
import CityQuickviewItem from './CityQuickviewItem';

const CitiesQuickviewContainer = ({forecasts}) => {
  const cities = forecasts.map( forecast => {
    return <CityQuickviewItem forecast={forecast} key={forecast.name} />;
  });

  return (
    <section className="quickview-section">
      <ul>
        {cities}
      </ul>
    </section>
  );
};

export default CitiesQuickviewContainer;
