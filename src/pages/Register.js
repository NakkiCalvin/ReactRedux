import React, {Component} from 'react';
import { service } from '../services/Userservice';

const host = 'https://localhost:44326';

class RegisterBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
      };
    }

    submitRegister = (e) => {
      e.preventDefault();
      let data = {
          Email: this.state.email,
          Password: this.state.password,
      };


      fetch(`${host}/Account/Register`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then((response) => {
        if(response.status === 200){
          alert("Registration was confirmed successfully");
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
            Register
          </div>
          <div className="box">
  
            {/* <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
               
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div> */}
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onChange={this.handleUserInput} type="text" name="email" className="login-input" placeholder="Email"/>
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
              onClick={this.submitRegister}>Register</button>
          </div>
        </div>
        </form>
      );
    }
  }


export default RegisterBox;