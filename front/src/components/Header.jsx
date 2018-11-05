import React from 'react'
import {Link} from 'react-router-dom'
import SearchContainer from '../containers/SearchContainer'
import CategoriesContainer from '../containers/HeaderCategoriesContainer'
export default ()=>(
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
    <a className="navbar-brand" href="#">
    <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
  </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/register">Registrarse</a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="/products">Products <span className="sr-only">(current)</span></a>
        </li>
        <CategoriesContainer />
        <li className="nav-item">
            <Link to='/user/admin' ><button className='btn btn-danger'>ADMIN</button></Link>
        </li>
        </ul>
        <SearchContainer />
    </div>
    </nav>
);
