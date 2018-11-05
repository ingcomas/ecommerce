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
    handleClick(){
        console.log('fafafa')
    }
    render(){
            // {this.props.cart.cart[0] && console.log(this.props.cart.cart)}
            console.log(this.props.cart)
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
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td><i onClick={this.handleClick} className="fas fa-trash-alt delete-button"></i></td>
                </tr>
              ))}
            </tbody>
            <tr> <button className="btn btn-success">Para ir al checkout</button></tr>
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
        
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)

{/* <ul className="col-sm-3">
<div className="shoppingCart">
{this.props.cart.cart && this.props.cart.cart.map((prod , index) => (
        <li className='cartWhite' key={index}>
        <i onClick={this.handleClick} className="fas fa-trash-alt delete-button"></i>   </li>
))}
    <button className="btn btn-success">Para ir al checkout</button>
</div>
</ul> */}