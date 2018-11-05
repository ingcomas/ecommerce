import React from 'react';
import {connect} from 'react-redux'
import Products from '../components/Products';
import {listProducts} from '../redux/actions/products-actions'
import {addToCart} from '../redux/actions/CartActions'
import CartContainer from './CartContainer'

 class ProductsContainer extends React.Component{
    constructor(props){
        super(props);
     
        }
            // componentDidMount(){
            //     axios.get("/api/product")
            //     .then(res=> console.log(res.data)) [{…}, {…}, {…}, {…}, {…}]
            // }
            
    componentDidMount(){
        this.props.listProducts()
    };
    render(){
        return(
                    <Products 
                    productList={this.props.products}
                    addToCart={this.props.addCart}
                    /> 
        )
    }
}


function mapStateToProps(state){
    //    console.log(state)
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
        }

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

