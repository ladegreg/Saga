import React, {Component} from 'react';

import AuthContext from '../../../context/auth-context';

class Rejestracja extends Component {
  state = {
    emeilZajety: true,
    nickZajety: true
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.emailReEl= React.createRef();
    this.nickReEl = React.createRef();
    this.password1El = React.createRef();
    this.password2El = React.createRef();
  }

  submitHandlerRe = (eventRe) => {
    eventRe.preventDefault();
    const emailRe = this.emailReEl.current.value;
    const nickRe = this.nickReEl.current.value;
    const password1 = this.password1El.current.value;
    const password2 = this.password2El.current.value;

    if (
      password1 !== password2 ||
      emailRe.trim().length === 0 ||
      nickRe.trim().length === 0 ||
      password1 <= 4
    ) {
      return;
    }

    let requestBody = {
        query:`
          mutation {
            createUser(userInput: {email: "${emailRe}", nick: "${nickRe}",  password: "${password1}"}){
              _id
              email
              nick
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
        throw new Error('Failed');
      }
      return ( res.json()
    );
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="boxLogowanie">
          <form className="form-box" onSubmit={this.submitHandlerRe} >
            <div className="form-control">
              <label htmlFor="emailRe"> E-Mail: </label>
              <input type="email" id="emailRe" ref={this.emailReEl}/>
            </div>
            <div className="form-control">
              <label htmlFor="nickRe"> Nick: </label>
              <input type="text" id="nickRe" ref={this.nickReEl} />
            </div>
            <div className="form-control">
              <label htmlFor="password1"> Password: </label>
              <input type="password" id="password1" ref={this.password1El} />
            </div>
            <div className="form-control">
              <label htmlFor="password2"> Password: </label>
              <input type="password" id="password2" ref={this.password2El} />
            </div>
            <div className="form-actions">
              <button type="submit" onClick={this.switchModeHandler} >Login</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Rejestracja;
