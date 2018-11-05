import React, {Component} from 'react';
import axios from 'axios';

export default class CreateCategoryContainer extends Component {
	constructor(){
		super();

	}

	handleSubmit(e){
		e.preventDefault();
		const value= e.target.name;
		axios.post ('/categories/new')
			.then (response => res.send (response.data))
	}

	componentDidMount(){
		axios.get ('/api/categories')
			.then (response => res.send(response.data))
	}

	render(){
		return (
			<CreateCategory />
		)
	}
}