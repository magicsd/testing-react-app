import { combineReducers } from 'redux';
import success from './success';
import guessWords from './guessWords';
import secretWord from './secretWord';

export default combineReducers({
  success,
  guessWords,
  secretWord,
});
