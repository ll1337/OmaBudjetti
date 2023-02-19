import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

describe("example testing", () => {

  test('renders correctly', async () => {
    const tree = renderer.create(<App />).toJSON();
    await act(async () => { expect(tree).toMatchSnapshot(); })
  });
});

