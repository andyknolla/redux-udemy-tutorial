import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer       // adds a key to our global app state, called books. Value is 
                            //whatever gets returned by BooksReducer, which is an array of book objects
});

export default rootReducer;
