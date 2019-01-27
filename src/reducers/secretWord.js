import {actionTypes} from '../constants/actionTypes';

const { SET_SECRET_WORD } = actionTypes;

export default (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SECRET_WORD: {
      return payload;
    }
  }

  return state;
};
