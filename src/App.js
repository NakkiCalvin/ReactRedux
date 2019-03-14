import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from './actions/books';


import { Route,NavLink,HashRouter} from "react-router-dom";
import LoginForm from './pages/Login';
import RegisterForm from './pages/Register';
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

            // <div>
            //     <div>
            //         <input type="text" ref={(input) => {this.bookInput = input}} />
            //         <button onClick={this.addBook.bind(this)}>Add Book</button>
            //     </div>
            //     <div>
            //         <input type="text" ref={(input) => {this.searchInput = input}} />
            //         <button onClick={this.findBook.bind(this)}>Find Book</button>
            //     </div>
            //     <div>
            //         <button onClick={this.props.onGetBooks}> Get Books </button>
            //     </div>

            //     <ul>
            //         {this.props.books.map((book, index) =>
            //             <li key={index}>{book.name}</li>
            //         )}
            //     </ul>
            // </div>
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