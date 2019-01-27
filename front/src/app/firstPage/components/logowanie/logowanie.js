import React, {Component} from 'react';

import AuthContext from '../../../context/auth-context';

import './logowanie.css';

class Logowanie extends Component {
  state = {
    blondLogowania: null,
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  switchPopraw = () => {
    this.setState({ blondLogowania: false });
  }

  submitHandler = event => {
  event.preventDefault();
  const email = this.emailEl.current.value;
  const password = this.passwordEl.current.value;

  if (email.trim().length === 0 || password.trim().length === 0) {
    return;
  }

  let requestBody = {
    query: `
      query {
        login(email:"${email}", nick:"${email}", password: "${password}") {
          userId
          token
          tokenExpiration
        }
      }
    `
  };

  fetch('http://localhost:8000/graphql', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.status !== 200 && res.status !== 201) {
      throw new Error(this.setState({ blondLogowania: true }));
    }
    return res.json();
  })
  .then(resData => {
    if (resData.data.login.token) {
      this.context.login(
        resData.data.login.token,
        resData.data.login.userId,
        resData.data.login.tokenExpiration
      );
    }
  })
  .catch(err => {
    console.log(err);
  });
};
  render() {
    return (
      <React.Fragment>
        <div className="boxLogowanie">
          {this.state.blondLogowania && (
          <div className="uwaga">
            <p>Zły nick / email lub niewłaściwe hasło!</p>
            <button type="submit" onClick={this.switchPopraw} >OK</button>
          </div>)}
          {!this.state.blondLogowania && (
          <form className="form-box" onSubmit={this.submitHandler} >
            <div className="form-control">
              <label htmlFor="email"> E-Mail: </label>
              <input type="text" id="email" ref={this.emailEl} />
            </div>
            <div className="form-control">
              <label htmlFor="password"> Password: </label>
              <input type="password" id="password" ref={this.passwordEl} />
            </div>
            <div className="form-actions">
              <button type="submit" onClick={this.switchModeHandler} >Login</button>
            </div>
          </form>)}
        </div>)}
      </React.Fragment>
    )
  }
}

export default Logowanie;
