import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProduct} from '../redux/actions/products-actions'

import CreateProduct from '../components/CreateProduct';


class CreateProductContainer extends Component {
	constructor (props){
		super(props);
		this.handleSubmit= this.handleSubmit.bind(this);
	}
	
	handleSubmit(e){
		e.preventDefault();
		this.props.createProduct(e.target)
	}
	// Renderear el createProduct o productSingle cuando ya se cree uno nuevo.
	render (){
		return 	(
			<div>
				<CreateProduct handleSubmit= {this.handleSubmit} />
				
			</div>
		)
	}
}

function mapStateToProps(state){
    return { valores: state.product.newProduct,
    }
}
function mapDispatchToProps(dispatch){
    return {
        createProduct: function(producto){
			dispatch(createProduct(producto))
		}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProductContainer);