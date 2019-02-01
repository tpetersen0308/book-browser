import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import { addBooks, fetchBooks, formatQueryParams } from '../../actions/bookActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('addBooks()', () => {
  it('should create an action to add an array of books to the store', () => {
    const books = [
      {
        title: "Blood Meridian",
        author: "Cormac McCarthy",
      },
      {
        title: "The Windup Girl",
        author: "Paolo Bacigalupi",
      }
    ]
    const expectedAction = {
      payload: books,
      type: "ADD_BOOKS",
    }
    expect(addBooks(books)).toEqual(expectedAction);
  })
})

describe("formatQueryParams()", () => {
  it("returns a string with the query params properly formatted for querying the Google Books API", () => {
    let expectedParams = "the+windup+girl+intitle+paolo+bacigalupi+inauthor";
    let searchTerms = {
      title: "the windup girl",
      author: "paolo bacigalupi",
    }
    expect(formatQueryParams(searchTerms)).toEqual(expectedParams);
  })

  it("does not add title params if title search term is empty", () => {
    let expectedParams = "paolo+bacigalupi+inauthor";
    let searchTerms = {
      title: "",
      author: "paolo bacigalupi",
    }
    expect(formatQueryParams(searchTerms)).toEqual(expectedParams);
  })

  it("does not add author params if author search term is empty", () => {
    let expectedParams = "the+windup+girl+intitle";
    let searchTerms = {
      title: "the windup girl",
      author: "",
    }
    expect(formatQueryParams(searchTerms)).toEqual(expectedParams);
  })
})

test('fetchBooks() creates ADD_BOOKS action when fetching books is done', async () => {
  const bookResults = await fetch('https://www.googleapis.com/books/v1/volumes?q=intitle+the+windup+girl&orderBy=relevance&fields=kind,items(volumeInfo/title,volumeInfo/authors,volumeInfo/publisher,volumeInfo/imageLinks/thumbnail,volumeInfo/infoLink)').then(data => data.json())

  const expectedActions = [
    {
      type: 'FETCH_BOOKS_REQUEST'
    },
    {
      payload: bookResults.items,
      type: 'ADD_BOOKS'
    }
  ];

  const store = mockStore({ books: [] });

  const queryParams = { title: "the windup girl", author: "" }

  return store.dispatch(fetchBooks(queryParams)).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
