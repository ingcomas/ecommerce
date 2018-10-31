
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import HeaderContainer from './HeaderContainer';
import Login from '../components/Login';
import Register from '../components/Register';
import Cart from '../containers/CartContainer'
import ProductsContainer from '../containers/ProductsContainer'
import SingleProductsContainer from '../containers/SingleProductsContainer'

export default () => (
  <div id="main" className="container-fluid">
    <HeaderContainer/>
    <div className="col-xs-10">
      <Switch>
        <Route  path="/products" component={ProductsContainer}/>
        <Route path="/product/single" component={SingleProductsContainer} />
        <Redirect from="/" to="/products" />
      </Switch>
    </div>
  </div>
);
