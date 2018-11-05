import {LIST_PRODUCTS} from '../constants/productsConstants'

const initialSate =[];

export default (state = initialSate, action)=>{
    switch (action.type) {

        case LIST_PRODUCTS:   
         return Object.assign({},state,{
             allProducts: action.products
            });
        case 'NEW_PRODUCT':
            return Object.assign({},state,{newProduct:action.newProduct})        
        case 'SEARCH':
            return Object.assign({}, state, {search : action.search})
        case 'SINGLE_PRODUCT':
        return Object.assign({}, state, {oneProduct : action.oneProduct})
            default:
            return state;
    }
}

