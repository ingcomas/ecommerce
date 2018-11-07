import axios from 'axios'
import Products from '../../components/Products';

const getCategories = (categories) => ({
  type : 'GET_CATEGORIES',
  categories
});

const postActionCategory= (category) => ({
	type : 'POST_CATEGORY',
	category
});

const deleteActionCategory= (category) => ({
	type : 'POST_CATEGORY',
	category
})
const productosPorCategoria=(products)=>({
	type:'PRODUCT_BY_CATEGORY',
	products
})


export const axiosCategories = () => (dispatch) => {   
  axios.get(`/api/categories`)
		.then (res => res.data)
		.then (data => dispatch(getCategories(data))) 
};

export const postCategory= (categoryName) => (dispatch) => {
	axios.post('/api/categories/newcategory', {
		name : 	categoryName
	})
		.then (res => res.data)
		.then (cat => dispatch(postActionCategory(cat)))
		.then (res => dispatch(axiosCategories()))
};

export const deleteCategory= (categoryId) => (dispatch) => {
	axios.get (`/api/categories/delete/${categoryId}`)
		.then (res => res.data)
		.then (data => dispatch(deleteActionCategory(data)))
};


export const productByCategory = (categoryid)=> (dispatch)=>{
	axios.get(`/api/categories/${categoryid}`)
	.then(res=> dispatch(productosPorCategoria(res.data)) )
	// .then(res=> console.log(res.data, "data categories"))
}
