import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Route, Switch} from 'react-router-dom';

import { productByCategory} from '../redux/actions/categoriesActions'
import Products from '../components/Products';
import {listProducts} from '../redux/actions/products-actions'
import {addToCart} from '../redux/actions/CartActions'
import ProdctsFilterByCategoryContainer from './ProductsFilterByCategoryContainer'
;


 class ProductsContainer extends React.Component{
    constructor(props){
        super(props);
         this.state={
             products:[]
         }       
         }

    componentDidMount(){
       
       
    //    console.log(this.props.match.params.id, 'props.match')
    //    console.log(this.props, 'props.products')
    
       if (this.props.match.params.id) {
          this.props.productByCategory(this.props.match.params.id)
        //    this.setState({products:this.props.products})
        }
        else{ this.props.listProducts()}
     };
     
     componentWillReceiveProps(nextPRops){
        if (this.props.match.params.id){
            this.setState({
                products: nextPRops.productsByCategory
            })
        } else {
            this.setState({
                products: nextPRops.products
            })
        }
     }

    render(){
        // console.log(this.state, 'this.state')
        //  console.log(this.props, "THIS.PROPS")
        return( 
            <Products productList={this.state.products} addToCart={this.props.addCart}/>
        // <div> 
             
        //     <Route  path='/products' render={()=>(<Products productList={this.state.products} addToCart={this.props.addCart} />) }/>
        //     {/* <Route path='/products/categories/:id' render={()=><ProdctsFilterByCategoryContainer */}
        //      {/* product
        //     />}/> */}
            
        //     </div>
                )
    }
}


function mapStateToProps(state){
// console.log(state, "STATE!!")
    return{
            products: state.product.allProducts,
            productsByCategory: state.categories.productsByCategory
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
        productByCategory: function(idCategory){
            dispatch(productByCategory(idCategory))
        }
        
        
      
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

