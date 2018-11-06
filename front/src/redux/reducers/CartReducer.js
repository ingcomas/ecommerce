import {CART_ADD, CART_REMOVE} from '../constants/CartConstans'

const initialState = {
    cart : []
};
export default function cart(state = initialState, action) {
    switch (action.type) {
        case 'CART_ADD':
            const elem = state.cart.findIndex(elem=>elem.product.id === action.product.id)
            if(elem===-1){
                return Object.assign({},state, {cart:[...state.cart,{product:action.product, quantity:1}]});
            }
            return Object.assign({},state,{cart:[...state.cart.slice(0,elem),{
                product:action.product,quantity:state.cart[elem].quantity+1},
                ...state.cart.slice(elem+1)
            ]});
        case 'CART_REMOVE':
            return Object.assign({},state,{cart:[...state.cart.slice(0, action.index), ...state.cart.slice(action.index+1)]});
        case 'CART_FROM_STORAGE':
            return Object.assign({},state,action.cart)
        default:
            return state;
    }
}
