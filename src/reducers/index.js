import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,       // adds a key to our global app state, called books. Value is
                            //whatever gets returned by BooksReducer, which is an array of book objects
  activeBook: ActiveBook
});

export default rootReducer;
