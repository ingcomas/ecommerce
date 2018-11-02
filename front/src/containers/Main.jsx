import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import OrderContainer from './OrderContainer';
import Cart from './CartContainer'
import HeaderContainer from './HeaderContainer';
import LoginContainer from './LoginContainer';
import ProductsContainer from './ProductsContainer'
import SingleProductsContainer from './SingleProductsContainer'
import ProductManagerContainer from './ProductManagerContainer';
import RegisterContainer from './RegisterContainer';
import CategoriesContainer from './CategoriesContainer';
import ReviewsContainer from './ReviewsContainer'
import CreateProductContainer from './CreateProductContainer';
import CategoriesContainer from './CategoriesContainer';

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className="container-fluid">
               
                <HeaderContainer/>
                <Switch>
										<Route path='/products/newproduct' component= {CreateProductContainer} />
                    <Route exact path='/user/admin/orders' component={OrderContainer}/>
        						<Route path='/user/admin' component= {ProductManagerContainer} />
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path='/categories' component={CategoriesContainer} />
                    <Route exact path="/products" component={ProductsContainer} />
                    <Route path="/products/:id" component={SingleProductsContainer} />							
                    <Route path="/cart" component={Cart} />
                    <Redirect from="/" to="/products" />
                </Switch>
            </div>
        )
    }
}


