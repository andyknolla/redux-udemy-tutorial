import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
      <li key={book.title} className='list-group-item'>{book.title}</li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    )
  }
}
// make this component into a "container" (Redux)
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
// connect is a function from react-redux
// BookList is the only component that "cares about" the list of books. This
