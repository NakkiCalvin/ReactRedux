import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookForm extends Component {

    addBook(){
        console.log('addBook', this.bookInput.value);
        this.props.onAddBook(this.bookInput.value);
        this.bookInput.value = '';
    }
    
    findBook(){
        console.log('findBook', this.searchInput.value);  
        this.props.onFindBook(this.searchInput.value);
    }


  render() {
    return(
        <div>
            <div>
                <input type="text" ref={(input) => {this.bookInput = input}} />
                <button onClick={this.addBook.bind(this)}>Add Book</button> 
            </div>
            <div>
                 <input type="text" ref={(input) => {this.searchInput = input}} />
                 <button onClick={this.findBook.bind(this)}>Find Book</button>
            </div>
            <div>
                 <button onClick={this.props.onGetBooks}> Get Books </button>
            </div>
            {this.props.bookState.map((book, index) => <li key={index}>{book}</li>)}
            </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        bookState: state.books
    }
};

export default connect(mapStateToProps)(BookForm);