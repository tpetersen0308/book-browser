import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerms: "",
    }
  }

  render() {
    return (
      <div>
        <form>
          <FormControl id="search-input" />
        </form>
      </div>
    )
  }
}

export default Search;