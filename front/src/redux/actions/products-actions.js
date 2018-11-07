import axios from 'axios'
import {NEW_PRODUCT, LIST_PRODUCTS, SINGLE_PRODUCT, EDIT_PRODUCT, HANDLE_EDIT, INCLUDE_CATEGORIES} from '../constants/productsConstants'

 const productoCreado = (newProduct) => ({
    type: NEW_PRODUCT,
    newProduct
})


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
const seleccionaProducto =(oneProduct)=>({
    type :SINGLE_PRODUCT,
    oneProduct
})

const editActionProduct= (prod) => ({
	type : EDIT_PRODUCT,
	prod
})

const handleEditAction= (prod) => ({
	type: HANDLE_EDIT,
	prod
})

const productActionCategories= (filteredCategories) => ({
	type : INCLUDE_CATEGORIES,
	filteredCategories
})

export const createProduct = (producto) => (dispatch) => {
    const images= producto.images && producto.images.value.split(',');
    const categories= [];
    if(producto.categorias){
	for (var i=0; i<producto.categorias.length; i++){
			producto.categorias[i].checked == true ? categories.push (producto.categorias[i].value) : null
        }
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

export const editProduct= (productId) => (dispatch) => {
	axios.get (`/api/product/${productId}`)	
	.then (res => res.data)
	.then (data => dispatch(editActionProduct(data)))
}

// Pido los datos del producto a editar, para rellenar el form:
export const handleEdit= (productId) => (dispatch) => {
	axios.post (`/api/product/edit/${productId}`)
		.then (res => res.data)
		.then (data => dispatch(handleEditAction(data)))
}

// Pido por las categorias pertenecientes al producto seleccionado:
export const productCategories= (productId) => (dispatch) => {
	axios.get (`/api/product/${productId}/categories`)
		.then (res => res.data)
		.then (data => {
			dispatch(productActionCategories(data))
		})
}