import React from 'react'
import {Link} from 'react-router-dom'
export default ()=>(
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
    <a className="navbar-brand" href="#">
    <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
  </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link to="/products" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
        </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    </nav>
);
