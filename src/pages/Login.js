import React, {Component} from 'react';
import { userAction } from '../actions/UserActions';
import { connect } from 'react-redux';


class LoginBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        Email : '',
        Pass : ''
      };

      this.submitLogin = this.submitLogin.bind(this);
      this.handleUserInput = this.handleUserInput.bind(this);
    }

    submitLogin = (e) => {
        e.preventDefault();
        const { Email, Pass } = this.state;
        const { dispatch } = this.props;
        
        if(Email && Pass){
            
            dispatch(userAction.login(Email, Pass));
            
            //history.push('/#/profile');
            //window.location.reload();
            //if(this.props.loginState.authenticated && this.props.loginState.user.access_token){
            //history.push('/#/profile');
            //window.location.reload();
            //}
            // else{
            // history.push('/#/');
            // window.location.reload();
            // }
        }
    }
  
    handleUserInput = (e) => {

        const { name, value } = e.target;
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
                name="Email"
                className="login-input"
                placeholder="Email"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleUserInput}
                type="password"
                name="Pass"
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button
              type="button"
              className="login-btn"
            //  name = "username"
              onClick={this.submitLogin}>Login</button>
          </div>
        </div>
        </form>
        
      );
    }
}

const mapStateToProps = state => {
    return {
        loginState: state.login
    }
};

export default connect(mapStateToProps)(LoginBox);

//export default LoginBox;