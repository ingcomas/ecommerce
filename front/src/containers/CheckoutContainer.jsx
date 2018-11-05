import React from 'react';
import {connect} from 'react-redux';
import Checkout from '../components/Checkout'

class CheckoutContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    }
handleSubmit(e){
e.preventDefault();
console.log(e.target.lastName.value);

}
render (){
    return (
        <div>
            <Checkout
            handleSubmit={this.handleSubmit}
            productos={1}
            cantidad={1}
            />
        </div>
    )
}
}
function mapStateToProps(state){
    return { 
        // compraProductos: state.cart.productos,
        // cantidad: state.cart.cantidad

    }
}
function mapDispatchToProps(disptach){
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutContainer);
// comprar los productos en el carrito.
// especificar la direccion de entrega de los productos, y mi direccion de email.
// recibir una confirmacion en un mail despues del checkout
// recibir una notificacion por email, cuando la orden sea despachada, y cuando sea entregada