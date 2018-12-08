import React from "react";
import LtcTicker from "./../components/ltcTicker";

import renderer from "react-test-renderer";

test("Renders Correctly", () => {
  const tree = renderer.create(<LtcTicker />).toJSON();
  expect(tree).toMatchSnapshot();
});
