import React, {Component} from 'react';
import { connect } from 'react-redux';

import CreateCategory from '../components/CreateCategory';
import { postCategory, axiosCategories } from '../redux/actions/categoriesActions';
import store from '../redux/store';

class CreateCategoryContainer extends Component {
	constructor(props){
		super(props);
		this.state= store.getState();
		this.handleSubmit= this.handleSubmit.bind(this);
	}
	handleClick(e){
		// Definir funcion para borrar la categoria de la DB.
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.createCategory(e.target.name.value);
	}
	componentDidMount(){
		this.props.getCategories();
	}

	render(){
		return (
			<div>
				<CreateCategory categories= { this.props.categories } handleSubmit= { this.handleSubmit } />
			</div>
		)
	}
}

const mapStateToProps= (state) => {
	return {
		categories : state.categories.categories
	}
}

const mapDispatchToProps= (dispatch) => {
	return {
		createCategory : function (category){
			dispatch(postCategory(category));
		},
		getCategories : function (){
			dispatch(axiosCategories());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryContainer);