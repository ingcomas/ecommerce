import React from 'react'
import { Route, Switch} from 'react-router-dom';


import Products from '../components/Products'
import SingleProduct from '../components/SingleProduct'



class ProductsContainer extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return (
        <div>
             <Products /> 
        </div>
            
    )
}
}
export default ProductsContainer;