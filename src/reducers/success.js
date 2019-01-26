import {actionTypes} from '../constants/actionTypes';

const { CORRECT_GUESS } = actionTypes;

export default (state = false, action = {}) => {
  switch (action.type) {
    case CORRECT_GUESS: { return true }
  }

  return state;
}