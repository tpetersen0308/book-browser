import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Table } from 'react-bootstrap';

class Book extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class="book">
        <Panel>
          <Panel.Heading class="title">
            <strong>
              {this.props.title}
            </strong>
          </Panel.Heading>
          <ListGroup>
            <ListGroupItem class="image"><img src={this.props.imageLink} alt="Image Not Available" /></ListGroupItem>
            <ListGroupItem class="authors">Author{this.props.authors.length > 1 ? "s" : ""}: {this.props.authors.join(", ")}</ListGroupItem>
            <ListGroupItem class="publisher">Publisher: {this.props.publisher || "Publisher Not Available"}</ListGroupItem>
            <ListGroupItem class="more-info"><a href={this.props.infoLink} target="_blank">More Info</a></ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    )
  }
}

export default Book;