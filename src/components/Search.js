import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
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

  render() {
    return (
      <div>
        <form>
          <FormControl id="search-input" onChange={this.handleInputChange} />
        </form>
      </div>
    )
  }
}

export default Search;