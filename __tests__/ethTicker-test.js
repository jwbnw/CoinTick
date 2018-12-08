import React from "react";
import EthTicker from "./../components/ethTicker";

import renderer from "react-test-renderer";

test("Renders Correctly", () => {
  const tree = renderer.create(<EthTicker />).toJSON();
  expect(tree).toMatchSnapshot();
});
