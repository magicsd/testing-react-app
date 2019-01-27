import axios from 'axios';
import {actionTypes} from '../constants/actionTypes';
import {getLetterMatchCount} from '../helpers';

const { CORRECT_GUESS, GUESS_WORD, SET_SECRET_WORD } = actionTypes;

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

export const getSecretWord = () => dispatch => {
  return axios.get('http://localhost:7777')
    .then(({data: payload}) => {
      dispatch({ type: SET_SECRET_WORD, payload });
    });
};
