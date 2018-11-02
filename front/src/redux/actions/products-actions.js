import axios from 'axios'

const productoCreado = (newProduct) => ({
    type: 'NEW_PRODUCT',
    newProduct
})

export const createProduct = (producto) => (dispatch) => {
    const images= producto.images && producto.images.value.split(',');
    // console.log (images, ' <====');
    axios.post ('/api/product/newproduct', {
        name : producto.name.value,
        description : producto.description.value,
        price : producto.price.value,
        stock : producto.stock.value,
        images : images
    })
        .then (res => {
            console.log (res.data, ' <====');
            return res.data})
        .then(data => {
            // console.log (data, ' <====');
            return dispatch(productoCreado(data))})
        .catch(e=>console.log('error',e))
}