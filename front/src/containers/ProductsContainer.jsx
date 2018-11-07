import React from 'react';
import {connect} from 'react-redux'

import {filterProduct} from '../redux/actions/categoriesActions'
import Products from '../components/Products';
import {listProducts} from '../redux/actions/products-actions'
import {addToCart} from '../redux/actions/CartActions'
;


 class ProductsContainer extends React.Component{
    constructor(props){
        super(props);

         }

    componentDidMount(){
        this.props.listProducts()
     
    };
    render(){
         console.log(this.props, "THIS.PROPS")
        return(
                    <Products 
                    productList={this.props.products}
                    addToCart={this.props.addCart}
                    /> 
        )
    }
}


function mapStateToProps(state){
//  console.log(state, "STATE!!")
    return{
            products: state.product.allProducts,
          
    }
};
function mapDispatchToProps(dispatch){
    return{
        listProducts: function(){
            dispatch(listProducts())
        },
        addCart : function(product){
            dispatch(addToCart(product))
        },
        
      
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

