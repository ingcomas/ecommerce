import React from 'react';
import {connect} from 'react-redux'


import Products from '../components/Products';
import {listProducts, filterProduct} from '../redux/actions/products-actions'
import {addToCart} from '../redux/actions/CartActions'
;


 class ProductsContainer extends React.Component{
    constructor(props){
        super(props);

         }

    componentDidMount(){
        const idCategory = this.props.match.params.id   
        this.props.listProducts()
        // 
        if(idCategory) this.props.filterProduct(idCategory)
    };
    render(){
        console.log(this.props)
        return(
                    <Products 
                    productList={this.props.products}
                    addToCart={this.props.addCart}
                    /> 
        )
    }
}


function mapStateToProps(state){

    return{
            products: state.product.allProducts,
            categories: state.product.categories      
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
        filterProduct: function(idCategory){
            dispatch(filterProduct(idCategory))
        },
      
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

