import React, { Component } from 'react';
import BookItem from './BookItem';

class Books extends Component {
  deleteBook(id){
    this.props.onDelete(id);
  }

  render() {
    let bookItems;
    if(this.props.books){
      bookItems = this.props.books.map(book => {
        //console.log(book);
        return <BookItem onDelete={this.deleteBook.bind(this)} key={book.id} book={book}/>
      });
    }
    return (
      <div className="Books">
        {bookItems}
      </div>
    );
  }
}

export default Books;
