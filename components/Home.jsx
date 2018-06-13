import React from 'react';
import NavBar from './NavBar';
import TopPanel from './TopPanel';
import CitiesQuickviewContainer from './CitiesQuickviewContainer';
import Footer from './Footer';
import { getForecast, parseResponse } from '../util/ajax.js';
import { Route, HashRouter } from 'react-router-dom';

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
    const routes = this.state.forecasts.map(city => {
      return <Route exact path={`/${city.name}`} component={Footer} />;
    });
    return (
      <HashRouter>
        <main>
          <NavBar />
          <TopPanel />
          <CitiesQuickviewContainer forecasts={this.state.forecasts} />
          {routes}
          <Footer />
        </main>
      </HashRouter>
    );
  }
}

export default Home;
