import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import Checkout from '../components/Checkout'
import {createOrder} from '../redux/actions/orders-actions'

class CheckoutContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    }
handleSubmit(e){
    e.preventDefault();
    this.props.createOrder(e.target,this.props.user.id,this.props.items);
    //aqui debería realizar el clear del carrito. Una vez que queda limpio el carrito,
    //redirigir a la pagina principal
}
render (){
    return (
        <div>
            {this.props.items.length ?       
            <Checkout 
            handleSubmit={this.handleSubmit}
            items={this.props.items}
            user={this.props.user}
            />
            : 
            <Redirect to='/products' />
            }
        </div>
    )
}
}
function mapStateToProps(state){
    return { 
        items: state.cart.cart,//es un arreglo con objetos [{product:{producto},quantity:valor},{}]
        user: state.user,
    }
}
function mapDispatchToProps(disptach){
    return {
        createOrder: function(params,id,items){
            disptach(createOrder(params,id,items))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutContainer);
// comprar los productos en el carrito.
// especificar la direccion de entrega de los productos, y mi direccion de email.
// recibir una confirmacion en un mail despues del checkout
// recibir una notificacion por email, cuando la orden sea despachada, y cuando sea entregada