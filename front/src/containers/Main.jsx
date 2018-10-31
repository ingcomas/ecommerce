<<<<<<< HEAD
import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import HeaderContainer from './HeaderContainer'
import ReviewsContainer from './ReviewsContainer'
=======
>>>>>>> 98b22b6c77beaeca2c10801521a17f98490b7084

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import HeaderContainer from './HeaderContainer';
import Login from '../components/Login';
import Register from '../components/Register';
import Cart from '../containers/CartContainer'
import ProductsContainer from '../containers/ProductsContainer'


export default () => (
  <div id="main" className="container-fluid">
    <HeaderContainer/>
    <div className="col-xs-10">
      <Switch>
        <Route exact path="/products" component={ProductsContainer} />
        
        <Redirect from="/" to="/products" />
      </Switch>
    </div>
  </div>
);
