import React from 'react';
import NavBar from './NavBar';
import TopPanel from './TopPanel';
import CitiesQuickviewContainer from './CitiesQuickviewContainer';
import Footer from './Footer';
import { getForecast, parseResponse } from '../util/ajax.js';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      forecasts: [],
    };
  }
  componentDidMount() {
    getForecast().
      then(data => {
        this.setState({forecasts: parseResponse(data)});
        console.log(this.state);
      });
  }

  render() {
    return (
      <main>
        <NavBar />
        <TopPanel />
        <CitiesQuickviewContainer forecasts={this.state.forecasts} />
        <Footer />
      </main>
    );
  }
}

export default Home;
