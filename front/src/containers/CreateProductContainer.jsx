import React, { Component } from 'react';
import {connect} from 'react-redux';

import CreateProduct from '../components/CreateProduct';
import { createProduct, editProduct } from '../redux/actions/products-actions'
import { axiosCategories, deleteCategory } from '../redux/actions/categoriesActions'


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
		const producto= e.target;
    const images= producto.images && producto.images.value.split(',');
    const categories= [];
    if(producto.categorias){
		for (var i=0; i<producto.categorias.length; i++){
			producto.categorias[i].checked == true ? categories.push (producto.categorias[i].value) : null
      }
    }
		const prod= {
			name : producto.name.value,
			description : producto.description.value,
			price : producto.price.value,
			stock : producto.stock.value,
			images : images,
			categories : categories
		}
		this.props.createProduct(prod)
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