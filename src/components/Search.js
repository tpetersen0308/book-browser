import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { fetchBooks } from '../actions/bookActions';
import store from '../store/configureStore'; //importing store because redux connect is crashing test suite
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerms: "",
    }
  }

  handleInputChange = (event) => {
    this.setState({
      searchTerms: event.target.value,
    });
  }

  handleSearchButton = (event) => {
    store.dispatch(fetchBooks(this.state.searchTerms.split(' ')));
  }

  render() {
    return (
      <div>
        <form>
          <FormControl id="search-input" onChange={this.handleInputChange} />
          <br />
          <Button id="search-button" onClick={this.handleSearchButton}>Search</Button>
        </form>
      </div>
    )
  }
}

export default Search;