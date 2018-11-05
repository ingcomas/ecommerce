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
import CreateCategoryContainer from './CreateCategoryContainer';
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
			<div className="container-fluid">
				<HeaderContainer/>
					<Switch>
						<Route path='/user/admin' component= {ProductManagerContainer} />
						<Route path="/register" component={RegisterContainer}/>
						<Route path="/login" component={LoginContainer}/>
						<Route path='/categories/newcategory' component={CreateCategoryContainer} />
						<Route path='/products/newproduct' component= {CreateProductContainer} />
						<Route path="/products/:id" component={SingleProductsContainer} />							
						<Route exact path="/products" component={ProductsContainer} />
						<Route exact path='/user/admin/orders' component={OrderContainer}/>
						<Route path="/cart" component={Cart} />
						<Redirect from="/" to="/products" />
				</Switch>
			</div>
		)
	}

}


