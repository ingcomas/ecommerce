const initialSate ={};
import { GET_CATEGORIES, POST_CATEGORY, DELETE_CATEGORY } from '../constants/categoriesConstants'; 

export default (state = initialSate,action)=>{
	switch (action.type) {
			case GET_CATEGORIES:
				return Object.assign({}, state, {categories : action.categories})
			case POST_CATEGORY:
				return Object.assign({}, state, { category : action.category })
			case DELETE_CATEGORY:
				return Object.assign({}, state, { category : action.category })
			case 'PRODUCT_BY_CATEGORY':
			return Object.assign({}, state, { productsByCategory : action.products })
			
				default:
				return state;
	}
}
