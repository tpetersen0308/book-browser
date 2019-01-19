import fetch from 'isomorphic-fetch';

export function addBooks(books) {
  return {
    payload: books,
    type: "ADD_BOOKS",
  }
}

export function fetchBooks(searchTerms) {
  return dispatch => {
    dispatch(fetchBooksRequest());
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms.join('+')}+intitle&fields=items(volumeInfo/title, volumeInfo/authors, volumeInfo/description)`)
      .then(data => data.json())
      .then(json => {
        dispatch(addBooks(json.items))
      }).catch(error => console.log(error))
  }
}

export function fetchBooksRequest() {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  }
}
