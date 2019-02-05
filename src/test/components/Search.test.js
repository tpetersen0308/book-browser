import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../components/Search';

Enzyme.configure({ adapter: new Adapter() })

describe("search input: title", () => {
  it("should save the search terms in state when the input changes", () => {
    const wrapper = shallow(<Search />);

    wrapper.find("#title-search-input").simulate("change", {
      target: { id: "title-search-input", value: "Persepolis Rising" }
    });

    expect(wrapper.state().titleSearchTerms).toEqual("Persepolis Rising");
  })
})

describe("search input: author", () => {
  it("should save the search terms in state when the input changes", () => {
    const wrapper = shallow(<Search />);

    wrapper.find("#author-search-input").simulate("change", {
      target: { id: "author-search-input", value: "James S. A. Corey" }
    });

    expect(wrapper.state().authorSearchTerms).toEqual("James S. A. Corey");
  })
})

describe("checkInput()", () => {
  it("should return true if the search terms are not empty.", () => {
    const wrapper = shallow(<Search />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'checkInput');

    wrapper.find("#title-search-input").simulate("change", {
      target: { id: "title-search-input", value: "Persepolis Rising" }
    });

    expect(instance.checkInput()).toBe(true);
  })

  it("should return false if the search terms are empty.", () => {
    const wrapper = shallow(<Search />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'checkInput');

    expect(instance.checkInput()).toBe(false);
  })
})

describe("handleSearchButton()", () => {
  it("should render an alert if the user tries to submit empty search params.", () => {
    const wrapper = shallow(<Search />);
    window.alert = jest.fn()

    wrapper.find("#search-button").simulate("click");

    expect(window.alert).toHaveBeenCalledWith("You have not entered any search terms.\nPlease enter a title and/or author and try again.")
  })

  it("should render an alert if the user enters whitespace and attempts to submit search", () => {
    const wrapper = shallow(<Search />);
    window.alert = jest.fn()

    wrapper.find("#title-search-input").simulate("change", {
      target: { id: "title-search-input", value: "   " }
    });

    wrapper.find("#search-button").simulate("click");

    expect(window.alert).toHaveBeenCalledWith("You have not entered any search terms.\nPlease enter a title and/or author and try again.")
  })
})

describe("setAsyncTimer()", () => {
  jest.useFakeTimers();
  it("should render an alert when the server takes at least 10 seconds to respond.", () => {
    const wrapper = shallow(<Search fetching={true} />);
    const instance = wrapper.instance();
    window.alert = jest.fn()

    instance.setAsyncTimer();

    jest.advanceTimersByTime(10000);

    expect(window.alert).toHaveBeenCalledWith("The server is taking some time to respond.\nClick OK to continue waiting, or try again later.");
  })
})
