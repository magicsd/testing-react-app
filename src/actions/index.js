import {actionTypes} from '../constants/actionTypes';
import {getLetterMatchCount} from '../helpers';

const { CORRECT_GUESS, GUESS_WORD } = actionTypes;

export const guessWord = guessWord => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessWord, secretWord);

  dispatch({
    type: GUESS_WORD,
    payload: { guessWord, letterMatchCount },
  });

  if (guessWord === secretWord) {
    dispatch({ type: CORRECT_GUESS });
  }
};
