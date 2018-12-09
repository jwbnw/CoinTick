import React from "react";
import BtcTicker from "./../components/btcTicker";

import renderer from "react-test-renderer";

test("BTC Ticker Renders Correctly", () => {
  const tree = renderer.create(<BtcTicker />).toJSON();
  expect(tree).toMatchSnapshot();
});

