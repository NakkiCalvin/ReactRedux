import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookActions } from '../actions/booksActions';
import ModifyBook from './ModifyBook';

class BookList extends Component {
    handleDeleteClick = (id) => {
        this.props.dispatch(bookActions.delete(id));
    }
    handleEditClick = (id) => {
        this.props.dispatch(bookActions.edit(id));
       
    }


    render() {
    return(
    <div>
    <h1>Your Books</h1>
    {this.props.bookListState.map((book, index) => 
    <div key={index} className='heading1'>
     

        {this.props.bookListState.modify ?
        <ModifyBook key={book.bookId} book={book}/>
        :
        <div key={index}> 
        <p>{book.title}</p>
        <p>{book.content}</p>
        </div>}
      
    <form>
      <label>{book.releaseDate}</label>
      <h2>{book.title}</h2>
      <p>{book.content}</p> <br/>
      <div>
      <button onClick={() => this.handleEditClick(book.bookId)}>Modify Book</button>
      <button onClick={() => this.handleDeleteClick(book.bookId)}>Delete Book</button>
      </div>
    </form>
    </div> )}
    </div>);
    
    }
}


const mapStateToProps = state => {
    return {
        bookListState: state.books
    }
};

export default connect(mapStateToProps)(BookList);
