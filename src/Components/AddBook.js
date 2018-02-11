import React, { Component } from 'react';
import uuid from 'uuid';

class AddBook extends Component {
  constructor(){
    super();
    this.state = {
      newBook: {}
    }
  }

  static defaultProps = {
    genres: ['fiction', 'Biography', 'Scientific']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newBook: {
        id: uuid.v4(),
        title: this.refs.title.value,
        summary: this.refs.summary.value,
        author: this.refs.author.value,
        genre: this.refs.genre.value
      }}, function(){
        //console.log(this.state);
        this.props.addBook(this.state.newBook);
      });
    }
    e.preventDefault();
  }

  render() {
    let genreOptions = this.props.genres.map(genre => {
      return <option key={genre} value={genre} >{genre}</option>
    });
    return (
      <div>
        <h3>Add Book:</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Summary</label><br />
            <input type="text" ref="summary" />
          </div>
          <div>
            <label>Author</label><br />
            <input type="text" ref="author" />
          </div>
          <div>
            <label>Genre</label><br />
            <select ref="genre">
              {genreOptions}
            </select>
          </div>
          <input submit type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddBook;
