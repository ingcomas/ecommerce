/*
importamos librerias
*/
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
/*
importamos archivos nuestros
*/
import {removeFromCart} from '../redux/actions/CartActions'

class CartContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(

            <table className='table col-sm-12 col-xs-12 col-md-12 col-lg-3 cartWhite'>
            
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.cart && this.props.cart.cart.map((prod , index) => (
                  
                <tr className='cartWhite' key={index}>
                  <td>{prod.product.name}</td>
                  <td>{prod.product.price}</td>
                  <td><i onClick={()=>this.props.removeFromCart(index)} className="fas fa-trash-alt delete-button"></i></td>
                </tr>
              ))}
                <tr><td colSpan="3" style={{textAlign:"center"}}><Link to='/cart/checkout' className="btn btn-success">Go to checkout</Link></td></tr>
            </tbody>

          </table>
        
        )
    }
}

function mapStateToProps(state){
    return{
            cart: state.cart      
    }
};
function mapDispatchToProps(dispatch){
    return{
        removeFromCart : (index) => dispatch(removeFromCart(index))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)