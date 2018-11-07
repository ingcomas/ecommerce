import React, { Component } from 'react';
import {connect} from 'react-redux';

import CreateProduct from '../components/CreateProduct';
import { createProduct, editProduct } from '../redux/actions/products-actions'
import { axiosCategories, deleteCategory } from '../redux/actions/categoriesActions'


class CreateProductContainer extends Component {
	constructor (props){
		super(props);
		this.handleSubmit= this.handleSubmit.bind(this);
		// this.handleClick= this.handleClick.bind(this);
	}
	componentDidMount(){
		this.props.axiosCategories()
		// console.log ('CATEGORIES ', this.props.categories)
	}
	
	handleSubmit(e){
		e.preventDefault();
		this.props.createProduct(e.target)
	}
	// handleClick(e){
	// 	e.preventDefault();
	// 	this.props.editProduct(e.target.id.value);
	// }

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
		categories : state.categories.categories
		
	}
}
function mapDispatchToProps(dispatch){
	return {
		createProduct: function(product){
			dispatch(createProduct(product))
		},
		axiosCategories : function(){
			dispatch(axiosCategories())
		},
		editProduct : function(productId){
			dispatch(editProduct(productId))
		},
		deleteCategory : (catId) => {
			dispatch(deleteCategory(catId))
		}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProductContainer);