/*
importamos librerias
*/
import React,{ Component } from 'react';
import { connect } from 'react-redux';
/*
importamos archivos nuestros
*/

export default class Cart extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <ul>
                <li>aca rendereamos todos los prds<button>remove from cart</button></li>
                <button>Para ir al checkout</button>
            </ul>
        )
    }
}