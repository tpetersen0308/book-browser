function booksReducer(state = {
  books: [],
  fetching: false,
}, action) {
  switch (action.type) {
    case "ADD_BOOKS":
      return { books: action.payload, fetching: false };
    case "FETCH_BOOKS_REQUEST":
      return { ...state, fetching: true };
    default:
      return state;
  }
}

export default booksReducer;