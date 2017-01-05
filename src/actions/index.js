export function selectBook(book) {
  // selectBook is an ActionCreator; it needs to return an action,
  // which is an object with a type property.
console.log('a book has been selected', book);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
