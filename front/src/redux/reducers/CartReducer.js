import {CART_ADD, CART_REMOVE} from '../constants/CartConstans'

const initialState = {
    product : {}
};
export default function cart(state = initialState, action) {
    switch (action.type) {
        case 'CART_ADD':
            return Object.assign({},state,{
                cart : [...state, action.product]
            });
        default:
            return state;
    }
}