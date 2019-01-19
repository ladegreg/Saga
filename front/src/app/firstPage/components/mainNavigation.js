import React from 'react';
import { NavLink } from 'react-router-dom';

const mainNavigation = props =>(
  <header className="main-navigation">
    <nav className="main-navigation_item">
      <ul>
        <li><NavLink to="/start">Start</NavLink></li>
        <li><NavLink to="/max">Max $</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
