export function addBooks(books) {
  return {
    payload: books,
    type: "ADD_BOOKS",
  }
}

export function fetchBooks() {

}

export function fetchBooksRequest() {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  }
}
