import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
  // function that makes sure that the action generated by the action
  //creator(return value of selectBook) flows through the reducers.

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
            onClick={() => this.props.selectBook(book)}
            className='list-group-item'>
              {book.title}
        </li>
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
// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}                                       // function that ^
//sends action through the app
                                        // ^ from action creator

// Promote BookList from component to a container; it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// connect is a function from react-redux
// BookList is the only component that "cares about" the list of books. This
