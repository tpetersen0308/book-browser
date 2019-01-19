function addBooks(books) {
  return {
    payload: books,
    type: "ADD_BOOKS",
  }
}

export default addBooks;