import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductManager from '../components/ProductManager';
import axios from 'axios';

class ProductManagerContainer extends Component {
	constructor (){
		super()

		this.handleSubmit= this.handleSubmit.bind (this);
	}

	handleSubmit(e){
		e.preventDefault();
		const value= e.target;
		const images= value.images.split(', ')

		axios.post ('/api/newproduct', {
			name : value.name.value,
			description : value.description.value,
			price : value.price.value,
			images : value.images.value
		})
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