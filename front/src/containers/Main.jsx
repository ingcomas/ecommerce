import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import HeaderContainer from './HeaderContainer';
import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from '../containers/LoginContainer';
import Jumbotron from '../components/Jumbotron';
import SidebarContainer from './SidebarContainer';
import ProductsContainer from '../containers/ProductsContainer'
import Cart from '../containers/CartContainer'
import SingleProductsContainer from '../containers/SingleProductsContainer'
export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <SidebarContainer/>
                <HeaderContainer/>
                <Switch>
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route exact path="/products" component={ProductsContainer} />
                    <Route path="/product/single" component={SingleProductsContainer} />
                    <Route path="/cart" component={Cart} />
                    <Redirect from="/" to="/products" />
                </Switch>
                <Jumbotron/>
            </div>
        )
    }
}
