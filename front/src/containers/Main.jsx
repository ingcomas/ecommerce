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
import CreateCategoryContainer from './CreateCategoryContainer';
import CreateProductContainer from './CreateProductContainer';
import CheckoutContainer from './CheckoutContainer';
import CartContainer from './CartContainer';
import LoginContainer from './LoginContainer';

//COMPONENTS
import Jumbotron from '../components/Jumbotron';
import PrivateProfile from '../components/PrivateProfile';

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (        
            <div>
                <CartContainer />
                <div className="col-sm-12 col-xs-12 col-md-12 col-lg-9">
                    <Switch>
                        <Route exact path="/" component={Jumbotron}/>
                        <Route exact path='/user/admin/orders' component={OrderContainer}/>
                        <Route exact path="/products" component={ProductsContainer} />
                        <Route path="/profile" component={PrivateProfile} />
                        <Route path='/categories/newcategory' component={CreateCategoryContainer} />
                        <Route path='/products/newproduct' component= {CreateProductContainer} />  
						<Route path="/products/:id" component={SingleProductsContainer} />
                        <Route path='/user/admin' component= {ProductManagerContainer} />
                        <Route path="/register" component={RegisterContainer}/>
                        <Route path="/login" component={LoginContainer}/>
                        <Route path='/cart/checkout' component={CheckoutContainer} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </div>     
            </div>
        )
    }
}