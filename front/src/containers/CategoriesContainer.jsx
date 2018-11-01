import React, { Component } from 'react';
import axios from 'axios';
import Categories from '../components/Categories'

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
            <Categories categories={categories}/>
        )
    }
}
