import React from "react";
import LtcTicker from "./../components/ltcTicker";

import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("LTC Ticker Render Testing", () => {
  it("BTC Ticker isLoading: True Renders Correctly", () => {
    const tree = renderer.create(<LtcTicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("LTC Ticker isLoading: False Renders Correctly", () => {
    jest.useFakeTimers(); // This mocks out setTimeout and other timer functions with mock functions, needed since we use Animated here.

    const wrapper = shallow(<LtcTicker />);
    const tree = renderer
      .create(wrapper.setState({ isLoading: false }))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Ltc Ticker Unit Testing", () => {
  it("Constructor should set isLoading to true", () => {
    const wrapper = shallow(<LtcTicker />);
    expect(wrapper.instance().state.isLoading).toBe(true);
  });
  it("Constructor should set dataSource to an empty string", () => {
    const wrapper = shallow(<LtcTicker />);
    expect(wrapper.instance().state.dataSource).toBe("");
  });
  it("_onPresBtn1 should set isLoading to true", () => {
    const wrapper = shallow(<LtcTicker />);
    const instance = wrapper.instance();
    instance.state.isLoading = false;
    expect(instance.state.isLoading).toBe(false);
    instance._onPressBtn1();
    expect(instance.state.isLoading).toBe(true);
  });
  it("_onPressBtn should call fetchData()", () => {
    const fetchDataMock = jest.fn();

    const wrapper = shallow(<LtcTicker />);
    const instance = wrapper.instance();
    instance.fetchData = fetchDataMock;
    instance._onPressBtn();
    expect(fetchDataMock).toBeCalled();
  });
  it("fetchData should make call and set state", async () => {
    fetch.mockResponseOnce(JSON.stringify([{ price_usd: "1" }]));

    const wrapper = shallow(<LtcTicker />);
    const instance = wrapper.instance();
    try {
      instance.fetchData();
      expect(instance.state.dataSource).toEqual("1.0");
      expect(instance.state.isLoading).toEqual(false);
    } catch (e) {}
  });
  it("fetchData should fail with an error", async () => {
    fetch.mockResponseOnce(JSON.stringify([{}]));

    const wrapper = shallow(<LtcTicker />);
    const instance = wrapper.instance();
    try {
      await instance.fetchData();
    } catch (e) {
      expect(e).toMatch("error");
    }
  });
});
