import React from "react";
import BtcTicker from "./../components/btcTicker";

import renderer from "react-test-renderer";

test("Renders Correctly", () => {
  const tree = renderer.create(<BtcTicker />).toJSON();
  expect(tree).toMatchSnapshot();
});
