import React, {Component} from 'react';
import { userAction } from '../actions/UserActions';
import { connect } from 'react-redux';

import { Formik } from 'formik';

class LoginBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        Email : '',
        Password : ''
      };

      // this.submitLogin = this.submitLogin.bind(this);
      // this.handleUserInput = this.handleUserInput.bind(this);
    }

    // submitLogin = (e) => {
    //     e.preventDefault();
    //     const { Email, Password } = this.state;
    //     const { dispatch } = this.props;
        
    //     if(Email && Password){
            
    //         dispatch(userAction.login(Email, Password));
           
    //     }
    // }
  
    // handleUserInput = (e) => {
    //     const { name, value } = e.target;
    //     this.setState({[name]: value});
    // }

    render() {

      return (
        <div className="inner-container">
          <div className="header">
             Login
           </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Email is required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            } else if(!values.password) {
              errors.password = 'Password is required'
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.props.dispatch(userAction.login(values.email, values.password))
            setSubmitting(false)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <div className="box">
            <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
            <label>Email</label> <br/>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <br/>
              {errors.email && touched.email && errors.email}
              <br/>
              </div>
              <div className="input-group">
              <label>Password</label> <br/>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <br/>
              {errors.password && touched.password && errors.password}
              <br/>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </form>
            </div>
          )}
        </Formik>
      </div>

        // <form method="POST">
        // <div className="inner-container">
        //   <div className="header">
        //     Login
        //   </div>
        //   <div className="box">
  
        //     <div className="input-group">
        //       <label htmlFor="username">Username</label>
        //       <input
        //         onChange={this.handleUserInput}
        //         type="text"
        //         name="Email"
        //         className="login-input"
        //         placeholder="Email"/>
        //     </div>
  
        //     <div className="input-group">
        //       <label htmlFor="password">Password</label>
        //       <input
        //         onChange={this.handleUserInput}
        //         type="password"
        //         name="Password"
        //         className="login-input"
        //         placeholder="Password"/>
        //     </div>
  
        //     <button
        //       type="button"
        //       className="login-btn"
        //       onClick={this.submitLogin}>Login</button>
        //   </div>
        // </div>
        // </form>
      );

    }
}

const mapStateToProps = state => {
    return {
        loginState: state.login
    }
};

export default connect(mapStateToProps)(LoginBox);