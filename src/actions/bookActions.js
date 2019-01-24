import fetch from 'isomorphic-fetch';

export function addBooks(books) {
  return {
    payload: books,
    type: "ADD_BOOKS",
  }
}

export function fetchBooks(searchTerms) {
  const queryParams = formatQueryParams(searchTerms)
  return dispatch => {
    dispatch(fetchBooksRequest());
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${queryParams}&orderBy=relevance&fields=kind,items(volumeInfo/title,volumeInfo/authors,volumeInfo/publisher,volumeInfo/imageLinks/thumbnail,volumeInfo/infoLink)`)
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

export function formatQueryParams(searchTerms) {
  let queryParams = []
  if (searchTerms.title.length > 0) {
    queryParams.push(searchTerms.title.replace(/ /g, "+") + "+intitle");
  }
  if (searchTerms.author.length > 0) {
    queryParams.push(searchTerms.author.replace(/ /g, "+") + "+inauthor");
  }
  return queryParams.join("+");
}
