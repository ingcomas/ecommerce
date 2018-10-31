import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Products from '../components/Products'
import SingleProduct from '../components/SingleProduct'



class HeaderContainer extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return (
        <div>
            
            <Switch>
                <Route path="/"  render={()=> <Products/>} />
                {/* <Route  path="/${Productsid}"  render={()=>Products}/> */}
            </Switch>

        </div>
    )
}
}
export default HeaderContainer;