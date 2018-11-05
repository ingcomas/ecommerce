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
        products : allproducts
    }
}

const buscarProducto = (prods) => ({
    type : 'SEARCH',
    search : prods
})
const seleccionaProducto =(oneprod)=>({
    type :"SINGLE_PRODUCT",
      oneprod      

})

export const createProduct = (producto) => (dispatch) => {
    const images= producto.images && producto.images.value.split(',');
    const categories= [];

		for (var i=0; i<producto.categorias.length; i++){
			producto.categorias[i].checked == true ? categories.push (producto.categorias[i].value) : null
		}
    axios.post ('/api/product/newproduct', {
			name : producto.name.value,
			description : producto.description.value,
			price : producto.price.value,
			stock : producto.stock.value,
			images : images,
			categories : categories
    })
    .then (res => {
        return res.data
    })
    .then(data => {
        return dispatch(productoCreado(data))
    })
    .catch(e=>console.log('error',e))
}

export const listProducts = (value)=>(dispatch)=>{
    axios.get('/api/product')
        .then(res=>  dispatch(listaproductos(res.data)))
        .catch(e=>console.log('error',e))
}

export const searchProduct = (value) => (dispatch) => {
    axios.get(`/api/product/`)
    .then(prodsArr=>dispatch(buscarProducto(prodsArr)))
    
}
export const singleProduct=(productId)=>(dispatch)=>{
    axios.get(`/api/product/${productId}`)
   .then(res=>dispatch(seleccionaProducto(res.data)))
}