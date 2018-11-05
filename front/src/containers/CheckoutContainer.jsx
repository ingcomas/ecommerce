import React from 'react';
import {connect} from 'react-redux';
import Checkout from '../components/Checkout'
import {createOrder} from '../redux/actions/orders-actions'

class CheckoutContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    }
handleSubmit(e){
    e.preventDefault();
    this.props.createOrder(e.target,this.props.items);
}
render (){
    console.log(this.props.compraProductos);
    return (
        <div>
            <Checkout
            handleSubmit={this.handleSubmit}
            items={this.props.items}
            cantidad={1}
            />
        </div>
    )
}
}
function mapStateToProps(state){
    return { 
         items: state.cart.cart,
        // cantidad: state.cart.cantidad

    }
}
function mapDispatchToProps(disptach){
    return {
        createOrder: function(params,items){
            disptach(createOrder(params,items))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutContainer);
// comprar los productos en el carrito.
// especificar la direccion de entrega de los productos, y mi direccion de email.
// recibir una confirmacion en un mail despues del checkout
// recibir una notificacion por email, cuando la orden sea despachada, y cuando sea entregada