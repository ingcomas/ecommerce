import axios from 'axios'
import {NEW_PRODUCT, LIST_PRODUCTS, SINGLE_PRODUCT, EDIT_PRODUCT, HANDLE_EDIT, INCLUDE_CATEGORIES, EDITED_PRODUCT} from '../constants/productsConstants'

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
const editedAction= (editedProduct) => ({
	type : EDITED_PRODUCT,
	editedProduct
})

// Creacion de nuevo producto:
export const createProduct = (producto) => (dispatch) => {
		axios.post ('/api/product/newproduct', producto)
    	.then (res => res.data)
    	.then(data => dispatch(productoCreado(data)))
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

// Pido los datos del producto a editar, para rellenar el form:
export const editProduct= (productId) => (dispatch) => {
	axios.get (`/api/product/${productId}`)	
	.then (res => res.data)
	.then (data => dispatch(editActionProduct(data)))
  .catch(e=>console.log('error',e))
}

// Actualizo la informacion de un producto:
export const handleEdit= (productId) => (dispatch) => {
	axios.post (`/api/product/${productId}/edit`)
		.then (res => res.data)
		.then (data => dispatch(handleEditAction(data)))
	  .catch(e=>console.log('error',e))
}

// Pido por las categorias pertenecientes al producto seleccionado:
export const productCategories= (productId) => (dispatch) => {
	axios.get (`/api/product/${productId}/categories`)
		.then (res => res.data)
		.then (data => {
			dispatch(productActionCategories(data))
		})
    .catch(e=>console.log('error',e))
}

// Hago un post para borrar la categoria de un producto especifico:
export const deleteProductCategory= (prodId, catId) => (dispatch) => {
	axios.post (`/api/product/${prodId}/edit`, {
		id : 	catId
	})
  .catch(e=>console.log('error',e))
}

// Actualizo la informacion de un producto:
export const submitEditedProduct= (prodId, prodFields) => (dispatch) => {
	axios.put (`/api/product/${prodId}`, prodFields)
		.then (data => {
			dispatch(editedAction(data));
		})
    .catch(e=>console.log('error',e))
}
