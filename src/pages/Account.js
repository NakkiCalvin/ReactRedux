import React, {Component} from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { userAction } from '../actions/UserActions';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

class AccountPage extends Component {
    
    constructor(props){
        super(props);
        this.onLogoutClick = this.onLogoutClick.bind(this);
      }

      onLogoutClick(e){
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(userAction.logout());
      }

    render() {
    const Authentication = () => {
        return(
            <li><NavLink to="/" onClick={this.onLogoutClick}>Logout</NavLink></li>
        )
    }

    return(
        <div>
            <Authentication/>
            
            <BookForm />
        </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        userState: state.login
    }
};

export default connect(mapStateToProps)(AccountPage);