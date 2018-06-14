import React from 'react';
import { cities } from '../util/cities';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const dropdownElements = Object.keys(cities).map(city => {
    return (
      <li className="city-nav" key={city}>
        <Link to={city}>{city}</Link>
      </li>
    );
  });
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Cities
          <ul className="city-dropdown">
            {dropdownElements}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
