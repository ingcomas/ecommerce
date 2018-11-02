import React from 'react';
import Products from '../components/Products';
import axios from 'axios';

export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            productList: []
        }        
    }
    componentDidMount(){
        axios.get("/api/product")
        .then(res=> res.data)
        .then(products=> this.setState({productList:products}) )     
    }
    render(){
        return(
            <div >
                <Products productList={this.state.productList}/>
            </div>
        )
    }
}