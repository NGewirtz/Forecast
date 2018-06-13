import React from 'react';
import { cities } from '../util/cities';

const NavBar = () => {
  const dropdownElements = Object.keys(cities).map(city => {
    return <li className="city-nav" key={city}>{city} </li>;
  });
  return (
    <nav>
      <ul>
        <li>
          Cities
          <ul className="city-dropdown">
            {dropdownElements}
          </ul>
        </li>
        <li>Home</li>
      </ul>
    </nav>
  );
};

export default NavBar;
