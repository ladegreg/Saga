import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import '../../style/firstPage.css';
import MainNavigation from './components/mainNavigation';
import Start from './components/start';
import Max from './components/max';
import Logowanie from './components/logowanie';


class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <h1>Kolony 2019</h1>
      </div>
    )
  }
}

class FirstPage extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <React.Fragment>
              <Logo/>
              <MainNavigation/>
              <main className="main-content">
                <Switch>
                  <Redirect from="/" to="/start" exact />
                  <Route path="/start" component={Start} />
                  <Route path="/max" component={Max} />
                  <Route path="/logowanie" component={Logowanie} />
                </Switch>
                </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default FirstPage;
