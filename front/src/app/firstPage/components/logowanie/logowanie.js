import React, {Component} from 'react';

import './logowanie.css';

class Logowanie extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="boxLogowanie">
          <form className="form-box">
            <div className="form-control">
              <label htmlFor="email"> E-Mail: </label>
              <input type="email" id="email"/>
            </div>
            <div className="form-control">
              <label htmlFor="password"> Password: </label>
              <input type="password" id="password"/>
            </div>
            <div className="form-actions">
              <button type="button">Login</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Logowanie;
