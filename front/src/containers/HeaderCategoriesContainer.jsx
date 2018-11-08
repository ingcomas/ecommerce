import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import { productByCategory, axiosCategories} from '../redux/actions/categoriesActions'



 class HeaderCategoriesContainer extends Component {
    constructor(props){
        super(props)
    
    }
    componentDidMount(){
       
        this.props.axiosCategories()
          }
          
    

    render(){
       
        return(
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorias
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {this.props.categories && this.props.categories.map(elem=>(
                         
                       
                        <Link to={`/categories/${elem.id}`} className="dropdown-item" key={elem.id} name={elem.name} >
                                {elem.name}
                        </Link>
                        
                       
                    ))}
                </div>
            </li>
        )
    }
}
// 

function mapStateToProps(state){
        return({
            productsByCategory: state.categories.productsByCategory,
            categories: state.categories.categories
            })
};
function mapDispatchToProps(dispatch){
    return({
        productByCategory: function(idCategory){
            dispatch(productByCategory(idCategory))
        },
        axiosCategories: function(){
            dispatch(axiosCategories())
        },
    })
       
}

export default connect (mapStateToProps,mapDispatchToProps)(HeaderCategoriesContainer)