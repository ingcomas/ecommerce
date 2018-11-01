import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import HeaderContainer from './HeaderContainer';
import ProductManagerContainer from './ProductManagerContainer';
import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from '../containers/LoginContainer';
import SidebarContainer from './SidebarContainer';
import ProductsContainer from '../containers/ProductsContainer'
import Cart from '../containers/CartContainer'
import SingleProductsContainer from '../containers/SingleProductsContainer'

import Login from '../components/Login';
import Register from '../components/Register';
import ReviewsContainer from './ReviewsContainer'
import Jumbotron from '../components/Jumbotron';

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
        						<Route path='/products/edit' component= {ProductManagerContainer} />
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route exact path="/products" component={ProductsContainer} />
                    <Route path="/products/single" component={SingleProductsContainer} />
                    <Route path="/cart" component={Cart} />
                    <Redirect from="/" to="/products" />
                </Switch>
                <Jumbotron/>
            </div>
        )
    }
}


