import React from 'react';
import Orders from '../components/Orders';
import {connect} from 'react-redux';
import FilterOrders from '../components/FilterOrders';
import {fetchOrders} from '../redux/actions/orders-actions';

class OrderContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
componentDidMount(){
    this.props.fetchOrders();
}
handleChange(e){
    this.setState({
        inputValue:e.target.value
    })    
}
handleSubmit(e){
    e.preventDefault();
    this.props.fetchOrders(this.state.inputValue);
}
render (){
    return (
    <div>
        <FilterOrders handleSubmit={this.handleSubmit} handleChange={this.handleChange} inputValue={this.state.inputValue}/>
        <Orders orders={this.props.orders}/>
    </div>
    )
}
}

function mapStateToProps(state){
    return {
        orders: state.orders
    }
}
function mapDispatchToProps(dispatch){
    return { fetchOrders: function (filter){
        dispatch(fetchOrders(filter))
    }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderContainer);