import React from 'react';
import TopPanel from './TopPanel';
import CitiesQuickviewContainer from './CitiesQuickviewContainer';
import { getForecast, parseResponse } from '../util/ajax.js';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      forecasts: [],
    };
  }
  componentDidMount() {
    getForecast()
      .then(data => {
        this.setState({forecasts: parseResponse(data)});
      });
  }

  render() {
    return (
      <div>
        <TopPanel />
        <CitiesQuickviewContainer forecasts={this.state.forecasts} />
      </div>
    );
  }
}

export default Home;
