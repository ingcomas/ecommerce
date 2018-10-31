import React from 'react'

import Products from '../components/Products'
import SingleProduct from '../components/SingleProduct'



class HeaderContainer extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    
    return (
        <div>
            <Products/>
            {/* <switch>
                <Route exact path="/"  render={()=>Products}/>
                <Route  path="/${Productsid}"  render={()=>Products}/>
            </switch> */}

        </div>
    )
}
}
export default HeaderContainer;