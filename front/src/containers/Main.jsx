import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

//CONTAINERS
import OrderContainer from './OrderContainer';
import Cart from '../containers/CartContainer'
import HeaderContainer from './HeaderContainer';
import LoginContainer from '../containers/LoginContainer';
import ProductsContainer from '../containers/ProductsContainer'
import SingleProductsContainer from '../containers/SingleProductsContainer'
import ProductManagerContainer from './ProductManagerContainer';
import RegisterContainer from '../containers/RegisterContainer';
import CategoriesContainer from './CategoriesContainer';
import ReviewsContainer from './ReviewsContainer'
import CreateProductContainer from './CreateProductContainer';





//COMPONENTS
import CreateProduct from '../components/CreateProduct';
import Jumbotron from '../components/Jumbotron';



export default class Main extends React.Component{3
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
                    <Route exact path="/" component={Jumbotron}/>
                    <Route exact path="/products" component={ProductsContainer} />
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/products/:id" component={SingleProductsContainer} />

					<Route path='/products/newproduct' component= {CreateProduct} />
        			<Route path='/user/admin' component= {ProductManagerContainer} />
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


