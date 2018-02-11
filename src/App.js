import React, { Component } from 'react';
import uuid from 'uuid';
import superagent from 'superagent';
import './App.css';

import Books from './Components/Books';
import AddBook from './Components/AddBook';
import Todos from './Components/Todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
      todos: []
    }
  }

  getFromApi(){
    superagent
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(function(res) {
       // res.body, res.headers, res.status
      console.log(res.body);
      this.setState({todos:[
        res.body
      ]});
    })
    .catch(function(err) {
       // err.message, err.response
       console.log(err.message);
    });
  }

  getBooks(){
    this.setState({books:[
      {
        id: uuid.v4(),
        title: "Book title1",
        summary: "Book desc1",
        author: "John Doe",
        genre: "Fiction"
      },
      {
        id: uuid.v4(),
        title: "Book title2",
        summary: "Book desc2",
        author: "Allan Doe",
        genre: "Biography"
      }
    ]});
  }

  componentWillMount(){
    this.getBooks();
    this.getFromApi();
  }

  componentDidMount(){
    this.getBooks();
  }

  handleAddBook(book){
    //make external POST API here. Post book
    //console.log(book);
    let books = this.state.books;
    books.push(book);
    this.setState(books:books);
  }

  handleDeleteBook(id){
    let books = this.state.books;
    let index = books.findIndex(x => x.id === id);
    books.splice(index, 1);
    this.setState(books:books);
  }

  render() {
    return (
      <div className="App">
        My Books App
        <AddBook addBook={this.handleAddBook.bind(this)} />
        <Books books={this.state.books} onDelete={this.handleDeleteBook.bind(this)} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
