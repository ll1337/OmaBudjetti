import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

afterEach(() => {
  jest.useRealTimers();
});

beforeEach(() => {
  jest.useFakeTimers();
});

describe("example testing", () => {

  test('renders correctly', async () => {
    const tree = renderer.create(<App />).toJSON();
    await expect(tree).toMatchSnapshot();
  });
});

