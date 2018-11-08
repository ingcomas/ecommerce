import React from 'react';
import {connect} from 'react-redux';
import {getOrdersUser} from '../redux/actions/orders-actions';

class UserProfile extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
        this.props.getOrdersUser(this.props.user.id)
    }
render(){
    return (
        <div className="row">
            {this.props.orders && this.props.orders.map(order=>(
       <div key={order.id} className="col-sm-9 col-md-9 col-lg-9">
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Orden N°{order.id}<br></br><span>Estado: </span><span className="text-success"><strong>{order.state}</strong></span></th>
                        <th className="align-middle">Cantidad</th>
                        <th className="align-middle text-center">Precio</th>
                        <th className="align-middle text-center">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {order.products.map(prod=> {
                        
                    })}
                    <tr>
                        <td className="col-sm-6 col-md-6 col-lg-6">
                        <div className="media">
                            <a className="thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{width: '60px', height: '60px'}}/> </a>
                            <div className="media-body">
                                <h5 className="media-heading"><a href="#">Product name muy largo</a></h5>               
                            </div>
                        </div>
                        </td>
                        <td className="col-sm-1 col-md-1 col-lg-6 align-middle text-center" >
                        <strong>3</strong>
                        </td>
                        <td className="col-sm-1 col-md-1 col-lg-6 align-middle text-right"><strong>$4.87</strong></td>
                        <td className="col-sm-1 col-md-1 col-lg-6 align-middle text-right"><strong>$14.61</strong></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td><h4><span>Total</span></h4></td>
                        <td className="text-right"><h5><strong>$31.53</strong></h5></td>
                    </tr>                  
                </tbody>
            </table>
        </div>
            ))}
        </div>
    )}
}
function mapStateToProps(state){
    return {
        user: state.user,
        orders: state.orders
    }
}
function mapDispatchToProps(dispatch){
    return {
        getOrdersUser:function(id){
            dispatch(getOrdersUser(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)
// https://bootsnipp.com/snippets/featured/shopping-cart-bs-3