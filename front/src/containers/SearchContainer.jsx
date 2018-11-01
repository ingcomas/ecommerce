import React from 'react'
import {Link} from 'react-router-dom'



export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search : ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const value = e.target.value;
        this.setState({
            search : value
        })
    }
    render(){
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={(e)=>this.handleChange(e)} aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          
        )
    }
}


