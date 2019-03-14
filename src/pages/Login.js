import React, {Component} from 'react';

class LoginBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        username : '',
        password : ''
      };
    }

    submitLogin(e) {
        this.setState={ username: e.target.value}
    }
  
    render() {
      return (
        <form method="POST">
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button
              type="button"
              className="login-btn"
            //  name = "username"
              onClick={this
              .submitLogin
              .bind(this)}>Login</button>
          </div>
        </div>
        </form>
      );
    }
}

export default LoginBox;