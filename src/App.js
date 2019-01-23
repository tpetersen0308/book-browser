import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
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
      </div>
    );
  }
}

export default App;
