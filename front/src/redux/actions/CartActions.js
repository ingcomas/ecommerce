export function addCartToStore(product) {
    return {
        type: 'CART_ADD',
        product
    }
}
// export function removeFromCart(productId) {
//     return {
//         type: CART_REMOVE,
//         product: {
//             productId
//         }
//     }
// }

export const addToCart = (product) => (dispatch) => {
   dispatch(addCartToStore(product))
}