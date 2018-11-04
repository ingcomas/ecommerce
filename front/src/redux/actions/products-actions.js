import axios from 'axios'
import {NEW_PRODUCT, LIST_PRODUCTS} from '../constants/productsConstants'

 const productoCreado = (newProduct) => ({
    type: NEW_PRODUCT,
    newProduct
})
// const listaproductos = (productos)=>({
    
// })
const listaproductos = function(allproducts){
    return{
        type: LIST_PRODUCTS,
        products : {allproducts}
    }
}


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
            
            return res.data})
        .then(data => {
            return dispatch(productoCreado(data))})
        .catch(e=>console.log('error',e))
}

export const listProducts = ()=>(dispatch)=>{
    axios.get('/api/product')
        .then(res=> {return res.data})
        .then(productos =>{ return dispatch(listaproductos(productos))})
        .catch(e=>console.log('error',e))
}



