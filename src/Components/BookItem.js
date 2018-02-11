import React, { Component } from 'react';

class BookItem extends Component {
  deleteBook(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Books">
        <strong>{this.props.book.title}:</strong> {this.props.book.summary} - {this.props.book.author} - {this.props.book.genre}<a href="#" onClick={this.deleteBook.bind(this, this.props.book.id)} > [delete]</a>
      </li>
    );
  }
}

export default BookItem;
