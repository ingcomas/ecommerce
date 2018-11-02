import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProduct} from '../redux/actions/products-actions'

import CreateProduct from '../components/CreateProduct';
import {axiosCategories} from '../redux/actions/categoriesActions'


class CreateProductContainer extends Component {
	constructor (props){
		super(props);
		this.handleSubmit= this.handleSubmit.bind(this);
	}
	componentDidMount(){
		this.props.axiosCategories()
	}
	
	handleSubmit(e){
		e.preventDefault();
		this.props.createProduct(e.target)
	}
	render (){
		return 	(
			<div>
				<CreateProduct categories={this.props.categories} handleSubmit= {this.handleSubmit} />
			</div>
		)
	}
}

function mapStateToProps(state){
    return { 
		valores: state.product.newProduct,
		categories : state.categories.categories
    }
}
function mapDispatchToProps(dispatch){
	return {
		createProduct: function(producto){
			dispatch(createProduct(producto))
		},
		axiosCategories : function(){
			dispatch(axiosCategories())
		}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProductContainer);