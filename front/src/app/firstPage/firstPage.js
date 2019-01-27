import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Logo from './components/logo/logo';
import Logowanie from './components/logowanie/logowanie';
import MainNavigation from './components/navig/mainNavigation';
import Start from './components/start';
import Max from './components/max';
import Rejestracja from './components/rejestracja/rejestracja';

import './firstPage.css';

class FirstPage extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <React.Fragment>
              <Logo/>
              <Logowanie/>
              <MainNavigation/>

              <main className="main-content">
                <Switch>
                  <Redirect from="/" to="/start" exact />
                  <Route path="/start" component={Start} />
                  <Route path="/max" component={Max} />
                  <Route path="/rejestracja/rejestracja" component={Rejestracja} />
                </Switch>
                </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default FirstPage;
