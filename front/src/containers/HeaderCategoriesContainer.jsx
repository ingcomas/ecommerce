import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class CategoriesContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories : []
        }
    }
    componentDidMount(){
        axios.get('/api/categories')
        .then(res=>this.setState({
            categories : res.data
        }))

    }
    render(){
        const { categories } = this.state
        return(
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorias
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {categories && categories.map(elem=>(
                        <Link className="dropdown-item" to={`/categories/${elem.id}`} key={elem.id} >{elem.name}</Link>
                    ))}
                </div>
            </li>
        )
    }
}
