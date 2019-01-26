import {correctGuess} from '../actions/';
import {actionTypes} from '../constants/actionTypes';

const { CORRECT_GUESS } = actionTypes;

describe('Test Redux', () => {
  describe('Actions Tests', () => {
    test(`Returns an action with type ${CORRECT_GUESS}`, () => {
      expect(correctGuess()).toEqual({ type: CORRECT_GUESS });
    })
  });
});