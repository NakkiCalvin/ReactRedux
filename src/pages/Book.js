import React, { Component } from 'react';
import {bookActions} from '../actions';

import {connect} from 'react-redux';

class Book extends Component {
  handleDeleteClick = (id) => {
    this.props.dispatch(bookActions.deleteBook(id));
  }
  handleEditClick = (id) => {
    this.props.dispatch(bookActions.edit(id));
  }
  render() {
  return (
    <div>
    <form>
      <label>{this.props.book.releaseDate}</label>
      <h2>{this.props.book.title}</h2>
      <p>{this.props.book.content}</p> <br/>
      <div>
      <button onClick={() => this.handleEditClick(this.props.book.bookId)}>Edit</button>
      <button onClick={() => this.handleDeleteClick(this.props.book.bookId)}>Delete</button>
      </div>
    </form>
    </div>
  );
 }
}

export default connect()(Book);