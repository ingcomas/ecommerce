import {LIST_PRODUCTS, SINGLE_PRODUCT, EDIT_PRODUCT, HANDLE_EDIT, INCLUDE_CATEGORIES} from '../constants/productsConstants'

const initialSate =[];

export default (state = initialSate, action)=>{
    switch (action.type) {
        
				case LIST_PRODUCTS:   
         	return Object.assign({},state,{ allProducts: action.products });

				case INCLUDE_CATEGORIES:
					return Object.assign ({}, state, { filteredCategories : action.filteredCategories })

				case EDIT_PRODUCT:
					return Object.assign({}, state, { product : action.prod }); 

				case HANDLE_EDIT:
					return Object.assign({}, state, { product : action.prod});

        case 'NEW_PRODUCT':
          return Object.assign({},state,{newProduct:action.newProduct})        

        case 'SEARCH':
          return Object.assign({}, state, {search : action.search})

        case SINGLE_PRODUCT:
        	return Object.assign({}, state, {oneProduct : action.oneProduct})

        default:
          return state;
    }
}

