import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HashRouter, Route, Switch} from "react-router-dom";
import { PrivateRoute } from './Router/Routes';
import { AnonumousRoute } from './Router/Routes';

import Header from './pages/HomeHeader';
import AccountPage from './pages/Account'; 
import My404Component from './pages/404page';

class App extends Component {

    render(){

        return(
        <HashRouter>
            <div className="content">
            <Switch>
                <PrivateRoute path="/profile" component={AccountPage}/>
                <AnonumousRoute exact path="/" component={Header}/>
                <Route component={My404Component} />
            </Switch>
            </div>
        
        </HashRouter>
        )
    }
}

 const mapStateToProps = state => {
     return {
         loginState: state.login
     }
 };

 export default connect(mapStateToProps)(App);
