import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductManager from '../components/ProductManager';
import axios from 'axios';

class ProductManagerContainer extends Component {
	constructor (){
		super()

		this.handleSubmit= this.handleSubmit.bind(this);
		this.handleClick= this.handleClick.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		const value= e.target;
		const images= value.images && value.images.value.split(',');

		axios.post ('/api/products/newproduct', {
			name : value.name.value,
			description : value.description.value,
			price : value.price.value,
			images : images
		})
	}

	// Definir metodo para traer el userId de la DB.
	// Si es admin, habilito los botones Create y Edit que van a estar en el sidebar.
	handleClick (){
		axios.get (`/api/users/${userId}`)
			.then (data => data.data)// ==> Es admin?
	}


	render (){
		return 	(
			<div>
				<ProductManager handleSubmit= {this.handleSubmit}/>
			</div>
		)
	}
}

export default ProductManagerContainer;