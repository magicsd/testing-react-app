import {actionTypes} from '../constants/actionTypes';

const { CORRECT_GUESS } = actionTypes;

export const correctGuess = () => ({ type: CORRECT_GUESS });