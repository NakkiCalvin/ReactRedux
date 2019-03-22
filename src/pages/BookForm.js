import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bookActions } from '../actions/booksActions';

class BookForm extends Component {

   
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.bookTitle.value;
        const content = this.bookContent.value;
        const {dispatch} = this.props;
        const data = {
            title,
            content,
            modify: false
        }

        dispatch(bookActions.create(data));
        this.bookTitle.value = '';
        this.bookContent.value = '';
    }


  render() {
    return(
        
        <div>
        <form onSubmit={this.handleSubmit}>
                <input required type="text" ref={(input) => {this.bookTitle = input}} />
                <textarea className="blockfloating" required rows="5" type="text" ref={(input) => {this.bookContent = input}} cols="28" />
                <button> Create book </button>
        </form>
         
         </div>
    );
  }
}

export default connect()(BookForm);