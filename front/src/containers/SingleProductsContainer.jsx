import React from 'react'
import{connect} from 'react-redux'
import axios from 'axios'

import SingleProduct from '../components/SingleProduct'
import {singleProduct} from '../redux/actions/products-actions'

class SingleProductContainer extends React.Component{
    constructor(props){
        super(props);
       
    }



 

    render(){
    
      console.log(this.props)
    // console.log(this.state, "hola")
    return (
        <div>
             <SingleProduct 
             product={this.state.oneProduct}
             /> 
        </div>
            
    )
}
}

function mapStateToProps(state){
    console.log(state , " state.product")
    return({
    oneProduct: state.product.oneProduct
    })
}
function mapDispatchToProps(dispatch){
    return({
        singleProduct:function(){
            dispatch(singleProduct(2)
            )
        }
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(SingleProductContainer)