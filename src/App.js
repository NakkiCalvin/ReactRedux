import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Redirect, Router, Route, Switch, NavLink, HashRouter} from "react-router-dom";
import { PrivateRoute } from './Router/Routes';
import { AnonumousRoute } from './Router/Routes';

import Header from './pages/HomeHeader';
import AccountPage from './pages/Account'; 
import My404Component from './pages/404page';

class App extends Component {

    render(){

        console.log(this.props.loginState.authenticated);
        console.log(localStorage.getItem('user'));
        
        return(
        <HashRouter>
        <div>
          <div className="content">
            <PrivateRoute path="/profile" component={AccountPage}/>
            <AnonumousRoute exact path="/" component={Header}/>
            <Route path='/404' component={My404Component} />
            <Redirect from='*' to='/404' />
            <Redirect form='http://localhost:3000' to='/' />
          </div>
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

//export default App;

// export default connect(
//     state => ({
//         books: state.books.filter(book => book.name.includes(state.filterBooks)),
//     }),
//     dispatch => ({
//         onAddBook: (name) => {
//             const payload = {
//                 id: Date.now().toString(),
//                 name
//             };
//             dispatch({ type: 'ADD_BOOK', payload })
//         },
//         onFindBook: (name) => {
//             dispatch({type: 'FIND_BOOK', payload: name})
//         },
//         onGetBooks: () => {
//             dispatch(getBooks());
//         }
//     })
// )(App);

