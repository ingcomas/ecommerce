import axios from 'axios';
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
export function llamarCarrito(){
    return {
        type : 'LLAMAR_CARRITO',
        valor: true
    }
}

export const addToCart = (product) => (dispatch) => {
    dispatch(addCartToStore(product))
}
export const removeFromCart = (index) => (dispatch) => {
    dispatch(removeFromCartToStore(index))
}
export const addCartFromStorage = (cart) => (dispatch) => {
    console.log('altocarro',cart)
    dispatch(addCartStorage(cart))
}
export const decProd = prod => dispatch => {
    dispatch(decOne(prod))
}
export const destroyCart = () => dispatch => {
    dispatch(nonCart())
}

export const saveCart = (cart, user) => dispatch => {
    const cartForBD = 
        cart.cart.map(elem=> ({ id: elem.product.id, quantity: elem.quantity}))
    
    axios.post('/api/cart', cartForBD)

}
export const setCartFromBD = () => dispatch => {
    axios.get('/api/cart')
    .then(res=>{
        dispatch(addCartStorage({cart:res.data}))
    })
    .catch(e=>console.log('no hay carrito para este user'))
}