import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import CreateProduct from '../components/CreateProduct';

class CreateProductContainer extends Component {
	constructor (){
		super();
		this.state= {
			name : '',
			description : '',
			price : 0,
			stock : 0,
			images : []
		}
		this.handleSubmit= this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		const value= e.target;
		const images= value.images && value.images.value.split(',');
		axios.post ('/api/products/newproduct', {
			name : value.name.value,
			description : value.description.value,
			price : value.price.value,
			stock : value.stock.value,
			images : images
		})
			.then (product => {
				this.setState ({
					name : product.data.name, 	
					description : product.data.description,
					price : product.data.description,
					stock : product.data.stock,
					images : product.data.images
				})	
			})
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

export default CreateProductContainer;