import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import { addBooks, fetchBooks } from '../../actions/bookActions';

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

test('fetchBooks() creates ADD_BOOKS action when fetching books is done', async () => {
  const bookResults = await fetch('https://www.googleapis.com/books/v1/volumes?q=windup+girl+intitle&fields=items(volumeInfo/title,volumeInfo/authors, volumeInfo/description)').then(data => data.json())

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

  return store.dispatch(fetchBooks(['windup', 'girl'])).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
