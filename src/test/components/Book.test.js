import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Book from '../../components/Search';

Enzyme.configure({ adapter: new Adapter() });

describe('<Book />', () => {
  const wrapper = mount(<Book
    title="The Subtle Knife"
    authors={["Philip Pullman", "Ian Beck"]}
    imageLink="http://books.google.com/books/content?id=of6mPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    infoLink="http://books.google.com/books?id=of6mPwAACAAJ&dq=intitle+the+golden+compass&hl=&source=gbs_api"
    publisher="Alfred A. Knopf Books for Young Readers"
  />);

  it('should render with title', () => {
    expect(wrapper.props().title).toEqual("The Subtle Knife")
  })
  it('should render with authors', () => {
    expect(wrapper.props().authors).toEqual(["Philip Pullman", "Ian Beck"])
  })
  it('should render with image link', () => {
    expect(wrapper.props().imageLink).toEqual("http://books.google.com/books/content?id=of6mPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api")
  })
  it('should render with link to more info', () => {
    expect(wrapper.props().infoLink).toEqual("http://books.google.com/books?id=of6mPwAACAAJ&dq=intitle+the+golden+compass&hl=&source=gbs_api")
  })
  it('should render with publisher', () => {
    expect(wrapper.props().publisher).toEqual("Alfred A. Knopf Books for Young Readers")
  })
})