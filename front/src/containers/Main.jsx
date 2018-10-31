import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import HeaderContainer from './HeaderContainer';
import Login from '../components/Login';
import Register from '../components/Register';
import Cart from '../containers/CartContainer'
import ProductManagerContainer from './ProductManagerContainer';
import ProductsContainer from '../containers/ProductsContainer'

export default () => (
  <div id="main" className="container-fluid">
    <HeaderContainer/>
		<Link to='/products/newproduct'>
			<button>Nuevo producto</button>
		</Link>
    <div className="col-xs-10">
      <Switch>
        <Route path='/products/newproduct' component= {ProductManagerContainer} />
        <Route exact path="/products" component={ProductsContainer} />
        <Redirect from="/" to="/products" />
      </Switch>
    </div>
  </div>
);
