import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {searchProduct} from '../redux/actions/products-actions'


class SearchContainer extends React.Component {
    constructor(props){
        super(props)
    }
    handleClick(e){
        const value = e.target.value;
        console.log(e.target)
        //this.props.searchProduct(value);
        
    }
    render(){
        
        return (
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleClick}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search"  aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          
        )
    }
}
function mapStateToProps(state){
    return { 
        search : state.search
    }
}
function mapDispatchToProps(dispatch){
    return {
        searchProduct: function(value){
			dispatch(searchProduct(value))
		}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer);


