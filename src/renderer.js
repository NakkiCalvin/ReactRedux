import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoginOpen: true,
        isRegisterOpen: false
      };
    }
  
    render() {
  
      return (
        <div className="root-container">
            <div className="box-controller">
                <div
                className={"controller " + (this.state.isLoginOpen
                    ? "selected-controller"
                    : "")}            
                onClick={this.showLoginBox.bind(this)}>
                Login
                </div>
                <div 
                className={"controller " + (this.state.isRegisterOpen
                ? "selected-controller" : "")} 
                onClick={this.showRegisterBox.bind(this)}>
                Register
                </div>
            </div>
        
        <div className="box-container">
        {this.state.isLoginOpen && <LoginBox/>}
        {this.state.isRegisterOpen && <RegisterBox/>}
        </div>
    </div>
    );  
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }
    
    showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }
  }

  class LoginBox extends React.Component {

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
      );
    }
  }

  class RegisterBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        confirm: ''
      };
      //this.submitRegister = this.submitRegister.bind(this);
    }
  
    submitRegister = (e) => {
      e.preventDefault();
      let data = {
          Email: this.state.email,
          Password: this.state.password,
          //ConfirmPassword: this.state.confirmPassword
      };
      fetch('https://localhost:44326/Account/Register', {
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

      })
    }

    handleUserInput = (e) => {

      const name = e.target.name;
    
      const value = e.target.value;
    
      this.setState({[name]: value});
    
    }
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Register
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
      );
    }
  }
export default App;
//reactDom.render(<App />, document.getElementById("root"));