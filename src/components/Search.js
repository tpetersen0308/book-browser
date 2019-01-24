import React, { Component } from 'react';
import { FormControl, ControlLabel, Button } from 'react-bootstrap';
import { fetchBooks } from '../actions/bookActions';
import store from '../store/configureStore'; //importing store because redux connect is crashing test suite
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      titleSearchTerms: "",
      authorSearchTerms: "",
    }
  }

  handleTitleInputChange = (event) => {
    this.setState({
      titleSearchTerms: event.target.value,
    });
  }

  handleAuthorInputChange = (event) => {
    this.setState({
      authorSearchTerms: event.target.value,
    });
  }

  handleSearchButton = (event) => {
    store.dispatch(fetchBooks({ title: this.state.titleSearchTerms, author: this.state.authorSearchTerms }));
  }

  render() {
    return (
      <div>
        <form id="search-form">
          <ControlLabel>Search by Title:</ControlLabel>
          <FormControl id="title-search-input" onChange={this.handleTitleInputChange} />
          <br />
          <ControlLabel>Search by Author:</ControlLabel>
          <FormControl id="author-search-input" onChange={this.handleAuthorInputChange} />
          <br />
          <Button id="search-button" onClick={this.handleSearchButton}>Search</Button>
        </form>
      </div>
    )
  }
}

export default Search;