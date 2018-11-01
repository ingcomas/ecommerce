import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import Cart from '../containers/CartContainer'
import Jumbotron from '../components/Jumbotron';
import HeaderContainer from './HeaderContainer';
import CreateProduct from '../components/CreateProduct';
import LoginContainer from '../containers/LoginContainer';
import ProductsContainer from '../containers/ProductsContainer'
<<<<<<< HEAD
import SingleProductsContainer from '../containers/SingleProductsContainer'

import Login from '../components/Login';
import Register from '../components/Register';
import Cart from '../containers/CartContainer'
import ReviewsContainer from './ReviewsContainer'
import Jumbotron from '../components/Jumbotron';
=======
import ProductManagerContainer from './ProductManagerContainer';
import RegisterContainer from '../containers/RegisterContainer';
import SingleProductsContainer from '../containers/SingleProductsContainer'

>>>>>>> bfb89215731bc796102fb03fe8e629686ee40859

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
<<<<<<< HEAD
            <div className="container-fluid">
                <SidebarContainer/>
=======
            <div>

>>>>>>> bfb89215731bc796102fb03fe8e629686ee40859
                <HeaderContainer/>

                <Switch>
                    <Route exact path="/" component={Jumbotron}/>
                    <Route exact path="/products" component={ProductsContainer} />
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/products/single" component={SingleProductsContainer} />
					<Route path='/products/newproduct' component= {CreateProduct} />
        			<Route path='/user/admin' component= {ProductManagerContainer} />
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/cart" component={Cart} />
                    <Redirect from="/" to="/products" />
                </Switch>
            </div>
        )
    }
}


