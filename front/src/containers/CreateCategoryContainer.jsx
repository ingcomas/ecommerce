import React, {Component} from 'react';
import { connect } from 'react-redux';

import CreateCategory from '../components/CreateCategory';
import { postCategory, axiosCategories } from '../redux/actions/categoriesActions';

class CreateCategoryContainer extends Component {
	constructor(props){
		super(props);
		this.handleSubmit= this.handleSubmit.bind(this);
		this.handleClick= this.handleClick.bind(this);
	}
	handleClick(e){
		this.props.deleteCategory(e.target.id);
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.createCategory(e.target.nombre.value);
	}
	componentDidMount(){
		this.props.getCategories();
	}

	render(){
		return (
			<div>
				<CreateCategory 
					categories= { this.props.categories } 
					handleSubmit= { this.handleSubmit } 
					handleClick= { this.handleClick } 
				/>
			</div>
		)
	}
}

const mapStateToProps= (state) => {
	return {
		categories : state.categories.categories,
		
	}
}

const mapDispatchToProps= (dispatch) => {
	return {
		createCategory : function (category){
			dispatch(postCategory(category));
		},
		getCategories : function (){
			dispatch(axiosCategories());
		},
		deleteCategories : function(catId){
			dispatch(deleteCategories(catId))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryContainer);