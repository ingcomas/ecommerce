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
import PrivateProfileContainer from './PrivateProfileContainer';

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

                    <Route path="/cart" component={Cart} />
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/profile" component={PrivateProfileContainer}/>
        			<Route path='/user/admin' component= {ProductManagerContainer} />
                    <Route path='/products/newproduct' component= {CreateProduct} />
                    <Route path="/products/single" component={SingleProductsContainer} />

                    <Redirect from="/" to="/products" />
                </Switch>
            </div>
        )
    }
}


