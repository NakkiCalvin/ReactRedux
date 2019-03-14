import React, {Component} from 'react';

const host = 'https://localhost:44326';

class LoginBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        email : '',
        password : ''
      };
    }

    submitLogin = (e) => {
        e.preventDefault();
        let data = {
            Email: this.state.email,
            Pass: this.state.password,
        };
        fetch(`${host}/Account/Login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
          if(response.status === 200){
            alert("Login confirmed successfully");
            return response.json();
          }
          else {
            alert("SOMETHING WENT WRONG");
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  
    handleUserInput = (e) => {

        const name = e.target.name;
      
        const value = e.target.value;
      
        this.setState({[name]: value});
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
                onChange={this.handleUserInput}
                type="text"
                name="email"
                className="login-input"
                placeholder="Email"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleUserInput}
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
              .submitLogin}>Login</button>
          </div>
        </div>
        </form>
      );
    }
}

export default LoginBox;