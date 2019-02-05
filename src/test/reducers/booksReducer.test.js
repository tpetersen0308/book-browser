import booksReducer from '../../reducers/booksReducer';

describe(booksReducer, () => {
  it('should handle ADD_BOOKS', () => {
    expect(booksReducer([], {
      payload: [
        {
          title: "Blood Meridian",
          author: "Cormac McCarthy",
        },
        {
          title: "The Windup Girl",
          author: "Paolo Bacigalupi",
        }
      ], type: "ADD_BOOKS"
    })).toEqual(
      {
        books: [
          {
            title: "Blood Meridian",
            author: "Cormac McCarthy",
          },
          {
            title: "The Windup Girl",
            author: "Paolo Bacigalupi",
          }
        ],
        fetching: false,
      }
    )
  })
})