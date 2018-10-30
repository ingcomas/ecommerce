import { createStore } from 'redux';
import reducer from '../redux/reducers/index.js';//cambiar la direccion donde se encuentra el combine reducer


export default createStore(reducer);