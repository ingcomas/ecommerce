import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import {isLogged} from '../redux/actions/userActions'
import {connect} from 'react-redux'

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
import CartContainer from './CartContainer'

  
//COMPONENTS
import PrivateProfile from '../components/PrivateProfile';

 class Main extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
     this.props.isLogged()
     console.log(sessionStorage.getItem('cart'))
    }
    render(){
        return (        
            <div>
                <HeaderContainer/>
                <CartContainer />
                <div className="col-sm-12 col-xs-12 col-md-12 col-lg-9">
                    <Switch>                                                
                        <Route path="/profile" component={PrivateProfile} />
                        <Route path='/categories/newcategory' component={CreateCategoryContainer} />                         
						<Route path="/products/:id" component={SingleProductsContainer} />
                        <Route path='/products/newproduct' component= {CreateProductContainer} />
						<Route exact path='/user/admin/orders' component={OrderContainer}/>
                        <Route path='/user/admin' component= {ProductManagerContainer} />
                        <Route path="/register" component={RegisterContainer}/>
                        <Route path="/login" component={LoginContainer}/>         
                        <Route exact path="/products" component={ProductsContainer} />
                        <Route path='/cart/checkout' component={CheckoutContainer} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </div>     
            </div>
        )
    }
}
  
        
    


function mapStateToProps(state){
    //    console.log(state)
    return{        
    }
};
function mapDispatchToProps(dispatch){
    return{
        isLogged: function(){
            dispatch(isLogged())
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Main)
