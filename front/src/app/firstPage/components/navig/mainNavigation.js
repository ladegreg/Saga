import React from 'react';
import { NavLink } from 'react-router-dom';

import './mainNavigation.css';

const mainNavigation = props =>(
  <header className="main-navigation">
    <nav className="main-navigation_item">
      <ul>
        <li><NavLink to="/start">Start</NavLink></li>
        <li><NavLink to="/max">Max $</NavLink></li>
        <li><NavLink to="/rejestracja/rejestracja">Rejestracja</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
