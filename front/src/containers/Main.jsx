import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import HeaderContainer from './HeaderContainer'
import ProductManagerContainer from './ProductManagerContainer';

class Main extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    
    return (
        <div>
            <HeaderContainer />
            <h1>Ecomjhgghmerce</h1>
						{/* <ProductManagerContainer /> */}
        </div>
    )
}

}
export default Main;