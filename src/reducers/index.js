import { combineReducers } from 'redux';
import success from './success';
import guessWord from './guessWord';
import secretWord from './secretWord';

export default combineReducers({
  success,
  guessWord,
  secretWord,
});
