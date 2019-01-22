import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import FirstPage from './app/firstPage/firstPage';
import Gra from './app/gra/gra';
import AuthContext from './app/context/auth-context';

import './style/App.css';

class App extends Component {

  state = {
  token: null,
  userId: null
};

login = (token, userId, tokenExpiration) => {
  this.setState({ token: token, userId: userId });
};

logout = () => {
  this.setState({token: null, userId: null});
};

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout:this.logout}}>

            <div className="App">
              {!this.state.token && <FirstPage/>}
              {this.state.token && <Gra/>}
            </div>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
