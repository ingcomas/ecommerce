/*
importamos librerias
*/
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
/*
importamos archivos nuestros
*/

class CartContainer extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
            // {this.props.cart.cart[0] && console.log(this.props.cart.cart)}
            console.log(this.props.cart)
        return(
            <div className="col-sm-3">
            <ul >            
               {this.props.cart.cart && this.props.cart.cart.map(prod => (
                   <li className='cartWhite' key={prod.id}>{prod.name}
                   <button>remove elemnet</button></li>
               ))}
                <Link to='/cart/checkout'>>Para ir al checkout
                </Link>
            </ul>
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
        
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)