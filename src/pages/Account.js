import React, {Component} from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { userAction } from '../actions/UserActions';
import BookList from './BookList';
import {
    NavLink
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
            <h1>{this.props.userPageState.user.userEmail}</h1>
            <Authentication/>
            <BookForm />
            <BookList/>
           
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        userPageState: state.login
    }
};

export default connect(mapStateToProps)(AccountPage);