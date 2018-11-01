import React from 'react'
import axios from 'axios';
import SingleProduct from '../components/SingleProduct'


class SingleProductContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            product:{}
        }
    }
    componentDidMount(){
        axios.get("/api/product/3")
        .then(res=> res.data)
        .then(product=> this.setState({product}) )}
render(){
    
    console.log(this.state.product)
    return (
        <div>
             <SingleProduct product={this.state.product}/> 
        </div>
            
    )
}
}
export default SingleProductContainer;