import React, { Component } from 'react';
import Book from './Book';

class BooksList extends Component {
  renderBooks = (books) => {
    return books.map((book, index) => {
      const volume = book.volumeInfo;
      return <Book
        title={volume.title || "Title not available"}
        authors={volume.authors || ["Author not available"]}
        publisher={volume.publisher || "Publisher not available"}
        imageLink={volume.imageLinks && volume.imageLinks.thumbnail ? volume.imageLinks.thumbnail : null}
        infoLinkHref={volume.infoLink || null}
        infoLinkText={volume.infoLink ? "More Info" : "More info is currently unavailable for this volume."}
        key={index}
      />
    })
  }

  render() {
    return (
      <div className="books-list">
        {this.props.books &&
          this.renderBooks(this.props.books)
        }
      </div>

    )
  }
}

export default BooksList;