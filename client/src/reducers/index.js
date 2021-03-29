import { combineReducers } from 'redux';
import items from './items';

const itemReducer = combineReducers({
  items
});

export default itemReducer;