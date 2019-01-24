import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Book.css';

class Book extends Component {
  render() {
    return (
      <Panel className="book">
        <Panel.Heading className="title">
          <strong>
            {this.props.title}
          </strong>
        </Panel.Heading>
        <ListGroup>
          <ListGroupItem className="image"><img src={this.props.imageLink} alt="Image Not Available" /></ListGroupItem>
          <ListGroupItem className="authors">Author{this.props.authors.length > 1 ? "s" : ""}: {this.props.authors.join(", ")}</ListGroupItem>
          <ListGroupItem className="publisher">Publisher: {this.props.publisher || "Publisher Not Available"}</ListGroupItem>
          <ListGroupItem className="more-info"><a href={this.props.infoLink} target="_blank" rel="noopener noreferrer">More Info</a></ListGroupItem>
        </ListGroup>
      </Panel>
    )
  }
}

export default Book;