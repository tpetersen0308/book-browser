import { createStore, applyMiddleware } from 'redux';
import booksReducer from '../reducers/booksReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  booksReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;