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
            content
        }
        dispatch(bookActions.create(data));
        
        this.bookTitle.value = '';
        this.bookContent.value = '';
        
    }


  render() {
    return(
        <form onSubmit={this.handleSubmit}>
                <input type="text" ref={(input) => {this.bookTitle = input}} />
                <input type="text" ref={(input) => {this.bookContent = input}} />
            {/* <div>
                 <input type="text" ref={(input) => {this.searchInput = input}} />
                 <button onClick={this.findBook.bind(this)}>Find Book</button>
            </div> */}
                 <button> Create book </button>
            {/* {this.props.bookState.map((book, index) => <li key={index}>{book}</li>)} */}
        </form>
    );
  }
}

const mapStateToProps = state => {
    return {
        bookState: state.books
    }
};

export default connect(mapStateToProps)(BookForm);