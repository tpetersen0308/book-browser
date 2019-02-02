import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Book.css';

class Book extends Component {

  listAuthors = (authors) => {
    return `Author${authors.length > 1 ? "s" : ""}: ${authors.length > 0 ? authors.join(',') : authors[0]}`
  }

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
          <ListGroupItem className="authors">{this.listAuthors(this.props.authors)}</ListGroupItem>
          <ListGroupItem className="publisher">Publisher: {this.props.publisher}</ListGroupItem>
          <ListGroupItem className="more-info"><a href={this.props.infoLinkHref} target="_blank" rel="noopener noreferrer" disabled={!this.props.infoLinkHref}>{this.props.infoLinkText}</a></ListGroupItem>
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