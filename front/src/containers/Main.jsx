import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import {isLogged} from '../redux/actions/userActions'
import {connect} from 'react-redux'
import { showCart } from '../redux/actions/CartActions';

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
import LoginContainer from './LoginContainer';
import CartContainer from './CartContainer';
import PrivateProfile from '../components/PrivateProfile'

//COMPONENTS
import AdminProfile from '../components/AdminProfile';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.showCart = this.showCart.bind(this);
    }
    componentDidMount(){
        this.props.isLogged()
        document.addEventListener('keydown', function(e){
            var algo = document.getElementById('algo');
        })
    }
    showCart(e){
        this.props.showCart();
    }
    render(){
        return (        
            <div className="container-fluid">
                <HeaderContainer showCart={this.showCart}/>
              
                <div className="row picanteo-row">
                    <CartContainer />
                    <div className="col-xs-10 col-sm-10">
                    <Switch>
                        {this.props.user.access ? 
                            <Route exact path='/products/:id/edit' component= {ProductsContainer} /> 
                            : null
                        }
                        <Route exact path="/" component={ProductsContainer}/>
                        <Route exact path="/products" component={ProductsContainer} />
                        <Route exact path='/products/:id/edit' component= {ProductsContainer} />
                        {this.props.user.access ? 
                            <Route exact path='/user/admin/orders' component={OrderContainer}/>
                        : null}
                        {this.props.user.access ? 
                            <Route path='/user/admin' component= {ProductManagerContainer} />
                        : null}
                        {this.props.user.access ? 
                            <Route path='/products/newproduct' component= {CreateProductContainer} />
                        : null}
                        {this.props.user.access ? 
                            <Route path='/categories/newcategory' component={CreateCategoryContainer} />
                        : null}
                        <Route path="/profile/admin" component={AdminProfile} />
                        <Route path="/register" component={RegisterContainer}/>
                        <Route path="/login" component={LoginContainer}/>
                        <Route path="/profile/user" component={PrivateProfile}/>
                        <Route path="/products/:id" component={SingleProductsContainer} />
                        <Route path='/cart/checkout' component={CheckoutContainer} />
                        <Route path="/cart" component={Cart} />
                        {/* //>>>>>>>not remove<<<<<<//// */}
                        <Route path="/categories/:id" component={ProductsContainer} />
                        {/* //>>>>>>>not remove<<<<<<////    */}
                        <Route path="/products/:id" component={SingleProductsContainer} />
                    </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{ 
        user: state.user,
        // valor: state.cart.valor
    }
};

function mapDispatchToProps(dispatch){
    return{
        isLogged: function(){
            dispatch(isLogged())
        },
        showCart: function(){
            dispatch(showCart());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Main)
