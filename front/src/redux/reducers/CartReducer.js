import {CART_ADD, CART_REMOVE} from '../constants/CartConstans'

const initialState = {
    cart : []
};
export default function cart(state = initialState, action) {
    switch (action.type) {
        case 'CART_ADD':
            return Object.assign({},state, {cart:[...state.cart, action.product]});
        default:
            return state;
    }
}