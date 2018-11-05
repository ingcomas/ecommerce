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
import CheckoutContainer from './CheckoutContainer';
import CartContainer from './CartContainer'

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className="container-fluid" >
               
                <HeaderContainer/>

                <div className="row row-view" >
                <CartContainer />
                <div className="col-sm-9">
                    <Switch>
                        <Route path='/products/newproduct' component= {CreateProductContainer} />
                        <Route exact path='/user/admin/orders' component={OrderContainer}/>
                        <Route path='/user/admin' component= {ProductManagerContainer} />
                        <Route path="/register" component={RegisterContainer}/>
                        <Route path="/login" component={LoginContainer}/>
                        <Route path='/categories' component={CategoriesContainer} />
                        <Route exact path="/products" component={ProductsContainer} />
                        <Route path="/login" component={LoginContainer}/>
                        <Route path='/cart/checkout' component={CheckoutContainer} />
                        <Route path="/products/:id" component={SingleProductsContainer} />
                    </Switch>
                </div>
                </div>
            </div>
        )
    }
}


