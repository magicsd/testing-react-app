import {actionTypes} from '../constants/actionTypes';
import success from '../reducers/success';

const { CORRECT_GUESS } = actionTypes;

describe('Redux Reducers Tests', () => {
  describe('success tests', () => {
    test('Returns default state of "false"', () => {
      expect(success()).toBe(false);
    });

    test(`Returns state of "true" when ${CORRECT_GUESS} is dispatched`, () => {
      const action = { type: CORRECT_GUESS };
      expect(success(undefined, action)).toBe(true);
    });
  });
});