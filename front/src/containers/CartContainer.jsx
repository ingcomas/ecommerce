/*
importamos librerias
*/
import React,{ Component } from 'react';
import { connect } from 'react-redux';
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
        
        return(
            <ul className="col-xs-3" >
               {this.props.cart.cart && this.props.cart.cart.map(prod => (
                   <li key={prod.id}>{prod.name}
                   <button>remove elemnet</button></li>
               ))}
                
                <button>Para ir al checkout</button>
            </ul>
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