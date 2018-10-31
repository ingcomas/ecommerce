import { CART_ADD, CART_REMOVE} from '../constants/CartConstans'
export function addToCart(productId) {
    return {
        type: CART_ADD,
        product: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        product: {
            productId
        }
    }
}