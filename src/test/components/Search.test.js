import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../components/Search';

Enzyme.configure({ adapter: new Adapter() })

describe("search input: title", () => {
  it("should save the search terms in state when the input changes", () => {
    const wrapper = shallow(<Search />);

    wrapper.find("#title-search-input").simulate("change", {
      target: { id: "search-input", value: "Persepolis Rising" }
    });

    expect(wrapper.state().titleSearchTerms).toEqual("Persepolis Rising");
  })
})

describe("search input: author", () => {
  it("should save the search terms in state when the input changes", () => {
    const wrapper = shallow(<Search />);

    wrapper.find("#author-search-input").simulate("change", {
      target: { id: "search-input", value: "James S. A. Corey" }
    });

    expect(wrapper.state().authorSearchTerms).toEqual("James S. A. Corey");
  })
})
