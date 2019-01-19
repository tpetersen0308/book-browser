import addBooks from '../../actions/bookActions';

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