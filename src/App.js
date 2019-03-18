import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from './actions/books';

import { Router, Route, Switch, NavLink,HashRouter} from "react-router-dom";
import { PrivateRoute } from './Router/Routes';

import Header from './pages/HomeHeader';
import AccountPage from './pages/Account'; 

class App extends Component {

    render(){

        console.log(this.props.loginState.authenticated);
        if(this.props.loginState.authenticated){
            
        }

        return(
        <HashRouter>
        <div>
          <div className="content">
            <Route path="/" component={Header}/>
            <PrivateRoute path="#/profile" component={AccountPage}/>
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

