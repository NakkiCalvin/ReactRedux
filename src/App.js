import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from './actions/books';


import { Route,NavLink,HashRouter} from "react-router-dom";
import Account from './pages/Account';
import Header from './pages/HomeHeader';

class App extends Component {
    
    addBook(){
        console.log('addBook', this.bookInput.value);
        this.props.onAddBook(this.bookInput.value);
        this.bookInput.value = '';
    }

    findBook(){
      console.log('findBook', this.searchInput.value);  
      this.props.onFindBook(this.searchInput.value);
    }

    render(){
        console.log(this.props.books);
    
        return(
          <Header/>
        )
    }
}

export default connect(
    state => ({
        //testStore: state.tracks,
        books: state.books.filter(book => book.name.includes(state.filterBooks)),
        users: state.users 
    }),
    dispatch => ({
        onAddBook: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({ type: 'ADD_BOOK', payload })
        },
        onFindBook: (name) => {
            dispatch({type: 'FIND_BOOK', payload: name})
        },
        onGetBooks: () => {
            dispatch(getBooks());
        }
    })
)(App);