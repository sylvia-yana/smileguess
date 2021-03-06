/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React from 'react-native'; // <rootdir>/app/__mocks__/react-native.js
import PlayerInput from '../../components/PlayerInput.js'; // Mocked automatically
/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js

/* Unmock GameScreen for unit testing */
jest.unmock('../GameScreen.js');
import GameScreen from '../GameScreen.js';

/* Create mock function to pass in as prop for testing */
const submitGuess = jest.genMockFunction();

describe('GameScreen', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<GameScreen onSubmitGuess={submitGuess} />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });

  it('should have a "Player Input" component', () => {
    expect(() => { findWithType(output, PlayerInput); }).not.toThrow();
  });
});
