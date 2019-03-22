import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bookActions} from '../actions';

class ModifyBook extends Comment {
    
    handleEdit = (e) => {
        e.preventDefault();
        const bookId = this.props.book.bookId;
        const title = this.getTitle.value;
        const content = this.getContent.value;
        const data = {
          bookId,
          title,
          content
        }
        this.props.dispatch(bookActions.update(data))
      }

      render() {
      return (
      <div onSubmit={this.handleEdit}>
        <form>
          <input required type="text" ref={(input) => this.getTitle = input}
          defaultValue={this.props.book.title} placeholder="Enter Post Title" /><br /><br />
          <textarea className="blockfloating" required rows="5" ref={(input) => this.getContent = input}
          defaultValue={this.props.book.content} cols="28" placeholder="Enter Post" /><br /><br />
          <button>Update</button>
        </form>
      </div>
      );
      }
      }
      
      export default connect()(ModifyBook);