function booksReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOKS":
      return action.payload;
    default:
      return state;
  }
}

export default booksReducer;