import React from 'react';
import TopPanel from './TopPanel';
import CitiesQuickviewContainer from './CitiesQuickviewContainer';

const Home = ({forecasts}) => {
  return (
    <div>
      <TopPanel />
      <CitiesQuickviewContainer forecasts={forecasts} />
    </div>
  );
};

export default Home;
