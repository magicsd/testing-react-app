import {actionTypes} from '../constants/actionTypes';

const { GUESS_WORD } = actionTypes;

export default (state = [], action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case GUESS_WORD: {
      return [...state, payload];
    }
  }

  return state;
}
