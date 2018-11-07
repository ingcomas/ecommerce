export function addCartToStore(product) {
    return {
        type: 'CART_ADD',
        product
    }
}
export function removeFromCartToStore(index) {
    return {
        type: 'CART_REMOVE',
        index
    }
}
export function addCartStorage(cart) {
    return {
        type : 'CART_FROM_STORAGE',
        cart
    }
}
export const addToCart = (product) => (dispatch) => {
    dispatch(addCartToStore(product))
}
export const removeFromCart = (index) => (dispatch) => {
    dispatch(removeFromCartToStore(index))
}
export const addCartFromStorage = (cart) => (dispatch) => {
    dispatch(addCartStorage(cart))
}