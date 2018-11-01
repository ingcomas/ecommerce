import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import Cart from '../containers/CartContainer'
import Jumbotron from '../components/Jumbotron';
import HeaderContainer from './HeaderContainer';
import CreateProduct from '../components/CreateProduct';
import LoginContainer from '../containers/LoginContainer';
import ProductsContainer from '../containers/ProductsContainer'
import ProductManagerContainer from './ProductManagerContainer';
import RegisterContainer from '../containers/RegisterContainer';
import SingleProductsContainer from '../containers/SingleProductsContainer'


export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>

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


