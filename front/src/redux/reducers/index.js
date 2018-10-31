/*
importamos librerias
*/
import { combineReducers } from 'redux';

/* 
importamos archivos nuestros
*/
import productoReducer from './productoReducer.js'
import CartReducer from './CartReducer'
export default combineReducers({
    producto: productoReducer,
    cart : CartReducer,
    
  });