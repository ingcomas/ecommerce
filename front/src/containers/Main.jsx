import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import HeaderContainer from './HeaderContainer'

class Main extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    
    
    return (
        <div>
            <HeaderContainer />
            <h1>Ecomjhgghmerce</h1>
            
        </div>
    )
}

}
export default Main;