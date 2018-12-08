import React from 'react';
import BtcTicker from './../components/btcTicker';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<BtcTicker />).toJSON();
  expect(tree).toMatchSnapshot();
});