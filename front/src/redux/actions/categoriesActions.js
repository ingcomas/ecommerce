import axios from 'axios'

const getCategories = (categories) => ({
  type : 'GET_CATEGORIES',
  categories
});

const postActionCategory= (category) => ({
	type : 'POST_CATEGORY',
	category
});

export const axiosCategories = () => (dispatch) => {    
  axios.get(`/api/categories`)
  	.then(catArray=>dispatch(getCategories(catArray)))
    
};

export const postCategory= (categoryName) => (dispatch) => {
	axios.post('/api/categories/newcategory', {
		name : 	categoryName
	})
		.then (res => res.data)
		.then (cat => dispatch(postActionCategory(cat)))
		.then (data =>	axiosCategories());
};