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
import reviewReducer from './reviewReducer';
import categoriesReducer from './categoriesReducer'
import userReducer from './userReducer';
import allUsersReducer from './allUsersReducer';

export default combineReducers({
    product: productReducer,
    cart : CartReducer,
    orders: ordersReducer,
    log: loginReducer,
    review: reviewReducer,
    categories : categoriesReducer,
    user: userReducer,
    allUsers: allUsersReducer
  });