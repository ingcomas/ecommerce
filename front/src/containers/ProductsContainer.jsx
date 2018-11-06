import React from 'react';
import {connect} from 'react-redux'


import Products from '../components/Products';
import {listProducts} from '../redux/actions/products-actions'
import {addToCart} from '../redux/actions/CartActions'
import {axiosCategories} from '../redux/actions/categoriesActions'
import axios from 'axios';


 class ProductsContainer extends React.Component{
    constructor(props){
        super(props);

         }

    componentDidMount(){
        this.props.listProducts()
        axios.get(`/api/categories`)
        .then(res => console.log(res.data, 'console categories'))
    };
    render(){
       const idCategory = this.props.match.params.id 
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
            products: state.product.allProducts        
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
        axiosCategories: function(){
            dispatch(axiosCategories())
        }

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

