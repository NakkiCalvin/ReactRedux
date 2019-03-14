import React, {Component} from 'react';

class AccountPage extends Component {

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
                 <ul>
                     {this.props.books.map((book, index) =>
                         <li key={index}>{book.name}</li>
                     )}
                 </ul>
             </div>
    );
  }
}

export default AccountPage;