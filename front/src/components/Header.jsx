import React from 'react'
import { Link } from 'react-router-dom'
import SearchContainer from '../containers/SearchContainer'
import CategoriesContainer from '../containers/HeaderCategoriesContainer'

export default ({user, logOut, showCart})=>(
    <nav style={{borderBottom: '3px solid black'}}className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
    <a className="navbar-brand" href="#">
    <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
  </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link to='/'><span className="nav-link">Home <span className="sr-only">(current)</span></span></Link>
        </li>
        <li className="nav-item">
            <Link to="/register"><span className="nav-link">Registrarse</span></Link>
        </li>
        <li className="nav-item active">
            <Link to="/products"><span className="nav-link">Products</span></Link>
        </li>
        
        <CategoriesContainer />
        {user.access ? 
        <li className="nav-item">
            <Link to='/user/admin' ><button className='btn btn-danger'>ADMIN</button></Link>
        </li>
        : null}
        </ul>
        <i onClick={showCart}className="fas fa-shopping-cart" style={{fontSize: '30px', marginRight: '30px'}}></i>
        {user.first_name ?
            (
            <span>
                <label style={{marginRight: '30px'}}className="userNameLabel">{user.first_name} {user.last_name}</label>
                <button className="btn btn-dark" onClick={logOut}>Logout</button>
            </span>
            )
        : 
            <Link to="/login"><button className="btn btn-dark">Login</button></Link>
        }
        <SearchContainer />
    </div>
    </nav>
);