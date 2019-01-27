import { combineReducers } from 'redux';
import success from './success';
import guessWord from './guessWord';

export default combineReducers({
  success,
  guessWord,
});