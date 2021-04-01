import { combineReducers } from 'redux';
import sign from './sign';
import enterprises from './enterprises';

export default combineReducers({
  sign,
  enterprises,
});
