import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import OrderContainer from './OrderContainer';
import Cart from './CartContainer'
import HeaderContainer from './HeaderContainer';
import ProductsContainer from './ProductsContainer'
import SingleProductsContainer from './SingleProductsContainer'
import ProductManagerContainer from './ProductManagerContainer';
import RegisterContainer from './RegisterContainer';
import CategoriesContainer from './CategoriesContainer';
import CreateProductContainer from './CreateProductContainer';
import CartContainer from './CartContainer'

import PrivateProfile from '../components/PrivateProfile';
import Jumbotron from '../components/Jumbotron';
import LoginContainer from './LoginContainer';

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className="container-fluid">
                <HeaderContainer/>
                    <div className="col-sm-9">
                <Switch>
                    <Route exact path="/" component={Jumbotron}/>
                    <Route exact path="/products" component={ProductsContainer} />
                    <Route exact path='/user/admin/orders' component={OrderContainer}/>

                    <Route path="/cart" component={Cart} />
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/profile" component={PrivateProfile}/>
        			<Route path='/user/admin' component= {ProductManagerContainer} />
                    <Route path='/categories' component={CategoriesContainer} />
                    <Route path='/products/newproduct' component= {CreateProductContainer} />
                    <Route path="/products/:id" component={SingleProductsContainer} />							
                    <Redirect from="/" to="/products" />
                </Switch>
                <CartContainer />
                    </div>
            </div>
        )
    }
}


