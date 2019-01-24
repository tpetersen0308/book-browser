import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Search from './components/Search';
import BooksList from './components/BooksList';
import { PageHeader } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
        <PageHeader>
          Welcome to BookBrowser!
          <br />
          <small>Use the search below to browse Google Books</small>
        </PageHeader>
        <Search />
        <br />
        <BooksList books={this.props.books} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(App);
