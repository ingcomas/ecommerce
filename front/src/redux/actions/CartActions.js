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
export function decOne(product) {
    return {
        type : 'DECREASE_ONE',
        product
    }
}
export function nonCart(){
    return {
        type : 'DESTROY_CART'
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
export const decProd = prod => dispatch => {
    dispatch(decOne(prod))
}
export const destroyCart = () => dispatch => {
    dispatch(nonCart())
}