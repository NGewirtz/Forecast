import React from 'react';
import NavBar from './NavBar';
import CityShow from './CityShow';
import Home from './Home';
import Footer from './Footer';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { getForecast, parseResponse } from '../util/ajax.js';

class Root extends React.Component {

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
    const routes = this.state.forecasts.map(city => {
      return <Route exact path={`/${city.name}`}
        component={() => <CityShow forecast={city} />}
        key={city.name}
      />;
    });

    return (
      <HashRouter>
        <main>
          <NavBar />
          <Switch>
            {routes}
            <Route component={Home} />
          </Switch>
          <Footer />
        </main>
      </HashRouter>
    );
  }
}

export default Root;
