/*
importamos librerias
*/
import { combineReducers } from 'redux';

/* 
importamos archivos nuestros
*/
import productoReducer from './productoReducer.js'
import CartReducer from './CartReducer'
import ordersReducer from './ordersReducer'
export default combineReducers({
    producto: productoReducer,
    cart : CartReducer,
    orders: ordersReducer,
  });