import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Book.css';

class Book extends Component {
  render() {
    return (
      <Panel className="book">
        <Panel.Heading className="title">
          <strong>
            {this.props.title || "Title Not Available"}
          </strong>
        </Panel.Heading>
        <ListGroup>
          <ListGroupItem className="image"><img src={this.props.imageLink} alt="Image Not Available" /></ListGroupItem>
          <ListGroupItem className="authors">Author{this.props.authors.length > 1 ? "s" : ""}: {this.props.authors.length > 0 ? this.props.authors.join(", ") : "Author Not Available"}</ListGroupItem>
          <ListGroupItem className="publisher">Publisher: {this.props.publisher || "Publisher Not Available"}</ListGroupItem>
          {this.props.infoLink &&
            <ListGroupItem className="more-info"><a href={this.props.infoLink} target="_blank" rel="noopener noreferrer">More Info</a></ListGroupItem>
          }
        </ListGroup>
      </Panel>
    )
  }
}

Book.defaultProps = {
  title: null,
  authors: [],
  publisher: null,
  imageLink: null,
  infoLink: null,
}

export default Book;