import React from 'react'

import SingleProduct from '../components/SingleProduct'


class SingleProductContainer extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    
    return (
        <div>
             <SingleProduct /> 
        </div>
            
    )
}
}
export default SingleProductContainer;