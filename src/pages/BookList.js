import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookActions } from '../actions/booksActions';
import ModifyBook from './ModifyBook';
import Book from './Book';

class BookList extends Component {

    componentWillMount(){
        this.props.dispatch(bookActions.getAll())
    }

    render() {
    return(
    <div>
    <h1>Your Books</h1>
    {this.props.bookListState.map((book, index) => 
    <div key={index} className='heading1'>
        {book.modify ?
        <ModifyBook key={book.bookId} book={book}/> :
        <Book key={book.bookId} book={book}/>
       }
    </div>)}
    </div>
    );
    }
}

const mapStateToProps = state => {
    return {
        bookListState: state.books
    }
};

export default connect(mapStateToProps)(BookList);
