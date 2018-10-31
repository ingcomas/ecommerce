import { combineReducers } from 'redux';
import productoReducer from './productoReducer.js'
export default combineReducers({
    producto: productoReducer,
    
  });