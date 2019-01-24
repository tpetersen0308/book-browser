import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Book from '../../components/Search';

Enzyme.configure({ adapter: new Adapter() });

describe('<Book />', () => {
  const wrapper = shallow(<Book
    title="The Subtle Knife"
    authors="Philip Pullman, Ian Beck"
    imageLink="http://books.google.com/books/content?id=of6mPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    infoLink="http://books.google.com/books?id=of6mPwAACAAJ&dq=intitle+the+golden+compass&hl=&source=gbs_api"
    publisher="Alfred A. Knopf Books for Young Readers"
  />);

  it('should render with title', () => {
    expect(wrapper.find("#title").text()).toEqual("The Subtle Knife")
  })
})