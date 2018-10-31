import React from 'react';
import Products from '../../Products';

export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            productList: []
        }
    }
    render(){
        return(
            <div>
                <Products/>
            </div>
        )
    }
}