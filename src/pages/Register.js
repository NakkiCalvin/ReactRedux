import React, {Component} from 'react';
import { userAction } from '../actions/UserActions';
import { connect } from 'react-redux';

class RegisterBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
          user: {
            Email: '',
            Password: ''
          }
      };

      this.submitRegister = this.submitRegister.bind(this);
      this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput = (e) => {
        console.log('handleWorking');
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({ 
            user: {
                ...user,
                [name]: value
            }
        });
    }

    submitRegister = (e) => {
      e.preventDefault();
      const { user } = this.state;
     const {dispatch} = this.props;
            if(user.Email && user.Password){
               dispatch(userAction.register(user));
            } 
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
                name="Password"
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

const mapStateToProps = state => {
    return {
        registerState: state.registration
    }
};

export default connect(mapStateToProps)(RegisterBox);

//export default RegisterBox;