import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

//CONTAINERS
import HeaderContainer from './HeaderContainer';
import ProductManagerContainer from './ProductManagerContainer';
import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from '../containers/LoginContainer';
import SidebarContainer from './SidebarContainer';
import ProductsContainer from '../containers/ProductsContainer'
import Cart from '../containers/CartContainer'
import SingleProductsContainer from '../containers/SingleProductsContainer'
import ReviewsContainer from './ReviewsContainer'
import CreateProductContainer from './CreateProductContainer';

//COMPONENTS
import Login from '../components/Login';
import Register from '../components/Register';
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
										<Route path='/products/newproduct' component= {CreateProductContainer} />
        						<Route path='/user/admin' component= {ProductManagerContainer} />
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route exact path="/products" component={ProductsContainer} />
                    <Route path="/products/single" component={SingleProductsContainer} />
                    <Route path="/cart" component={Cart} />
                    <Redirect from="/" to="/products" />
                </Switch>
                {/* <Jumbotron/> */}
            </div>
        )
    }
}


