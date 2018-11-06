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

export const addToCart = (product) => (dispatch) => {
   dispatch(addCartToStore(product))
}
export const removeFromCart = (index) => (dispatch) => {
    console.log(index)
    dispatch(removeFromCartToStore(index))
}