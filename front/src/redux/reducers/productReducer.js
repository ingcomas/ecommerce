import {NEW_PRODUCT, LIST_PRODUCTS} from '../constants/productsConstants'

const initialSate =[];

export default (state = initialSate, action)=>{
    switch (action.type) {
        case NEW_PRODUCT:
            return Object.assign({},state,{
                newProduct: action.newProduct
            });
        case LIST_PRODUCTS:   
         return Object.assign({},state,{
             allProducts: action.allProducts
            });
          
    
        default:
            return state;
    }
}

