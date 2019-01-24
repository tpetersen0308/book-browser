import React, { Component } from 'react';
import Book from './Book';

class BooksList extends Component {
  render() {
    return (
      <div className="books-list">
        {this.props.books &&
          this.props.books.map((book, index) => <Book
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            publisher={book.volumeInfo.publisher}
            imageLink={book.volumeInfo.imageLinks.thumbnail}
            infoLink={book.volumeInfo.infoLink}
            key={index}
          />)
        }
      </div>

    )
  }
}

export default BooksList;