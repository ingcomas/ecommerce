import React from 'react'

import {Route,Switch,Redirect} from 'react-router-dom'
import HeaderContainer from './HeaderContainer'
import ProductsContainer from './ProductsContainer'
class Main extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    
    
    return (
        <div id="main"  >
           
            <HeaderContainer />
         
            <div>
                <switch>
                    <Route path="/" render={()=><ProductsContainer />}/> 
                </switch>
            </div>

        </div>
    )
}

}
export default Main;