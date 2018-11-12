/*
importamos librerias
*/
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
/*
importamos archivos nuestros
*/
import {removeFromCart, addToCart, decProd} from '../redux/actions/CartActions'


class CartContainer extends Component {
    constructor(props){
        super(props)
    }  
    componentWillReceiveProps(nextProps){
            localStorage.setItem('cart', JSON.stringify(nextProps.cart)) 
    }  
    render(){        
        return(
            <div style={{borderRight: '5px solid black', backgroundColor: '#007bff', minHeight: '90vh'}}>
                <table className='table col-xs-2 col-sm-2 cartWhite'>
                    <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.cart.cart && this.props.cart.cart.map((prod , index) => (
                        
                        <tr className='cartWhite' key={index}>
                            <td><i onClick={()=>this.props.addCart(prod.product)} className="fas fa-plus-circle"></i>{prod.quantity}<i onClick={()=>this.props.decOne(prod.product)} className="fas fa-minus-circle"></i></td>
                        <td className="cart-name">{prod.product.name}</td>
                        <td className="cart-price">{prod.product.price}</td>
                        <td><i onClick={()=>this.props.removeFromCart(index)} className="fas fa-trash-alt delete-button"></i></td>
                        </tr>
                    ))}
                        <tr><td colSpan="3" style={{textAlign:"center"}}><Link to='/cart/checkout' className="btn btn-success">Go to checkout</Link></td></tr>
                    </tbody>   
                </table>
          </div>
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
        removeFromCart : (index) => dispatch(removeFromCart(index)),
        addCart : (product) => dispatch(addToCart(product)),
        decOne : (product) => dispatch(decProd(product))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)