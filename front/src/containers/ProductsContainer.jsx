import React from 'react';
import {connect} from 'react-redux'
import Products from '../components/Products';
import {listProducts} from '../redux/actions/products-actions'

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
                console.log(this.props.products)
            };
    render(){
        return(
            <div >
                <Products 
                productList={this.props.products}
                
                />  
            </div>
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
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

