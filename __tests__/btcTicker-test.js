import React from "react";
import BtcTicker from "./../components/btcTicker";

import renderer from "react-test-renderer";
import { shallow } from "enzyme";

test("BTC Ticker Renders Correctly", () => {
  const tree = renderer.create(<BtcTicker />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("BtcTicker component", () => {
  it("Constructor should set isLoading to true", () => {
    const wrapper = shallow(<BtcTicker />);
    expect(wrapper.instance().state.isLoading).toBe(true);
  });
  it("Constructor should set dataSource to an empty string", () => {
    const wrapper = shallow(<BtcTicker />);
    expect(wrapper.instance().state.dataSource).toBe("");
  });
  it("_onPresBtn1 should set isLoading to true", () => {
    const wrapper = shallow(<BtcTicker />);
    const instance = wrapper.instance();
    instance.state.isLoading = false;
    expect(instance.state.isLoading).toBe(false);
    instance._onPressBtn1();
    expect(instance.state.isLoading).toBe(true);
  });
  it("_onPressBtn should call fetchData()", () => {
    const fetchDataMock = jest.fn();

    const wrapper = shallow(<BtcTicker />);
    const instance = wrapper.instance();
    instance.fetchData = fetchDataMock;
    instance._onPressBtn();
    expect(fetchDataMock).toBeCalled();
  });
  // last test that would be nice would be mocking the api call to coinmarketcap and testing our
  // fetchData functionality.
});
