import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../redux/reducers/index.js';//cambiar la direccion donde se encuentra el combine reducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));