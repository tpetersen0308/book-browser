import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../components/Search';

Enzyme.configure({ adapter: new Adapter() })

describe("<Search />", () => {
  it("should save the search terms in state when the input changes", () => {
    const wrapper = shallow(<Search />);

    wrapper.find("#search-input").first().simulate("change", {
      target: { id: "search-input", value: "Persepolis Rising" }
    });

    expect(wrapper.state().searchTerms).toEqual("Persepolis Rising");
  })
})
