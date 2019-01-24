import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fetchBooks } from '../../actions/bookActions';
import BooksList from '../../components/BooksList';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() })

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<BooksList />", () => {
  it("receives a collection of books as props", () => {
    const store = mockStore({ books: [] });
    return store.dispatch(fetchBooks(['the', 'windup', 'girl'])).then(() => {

      console.log(store.getActions()[1].payload)
      const books = store.getActions()[1].payload;
      const wrapper = mount(<BooksList books={books} />);

      expect(wrapper.props().books).toEqual(books);
    })
  })
})