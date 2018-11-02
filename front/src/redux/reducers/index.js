/*
importamos librerias
*/
import { combineReducers } from 'redux';

/* 
importamos archivos nuestros
*/
import productReducer from './productReducer'
import CartReducer from './CartReducer'
import ordersReducer from './ordersReducer'
import loginReducer from './loginReducer'

export default combineReducers({
    product: productReducer,
    cart : CartReducer,
    orders: ordersReducer,
    log: loginReducer,
  });