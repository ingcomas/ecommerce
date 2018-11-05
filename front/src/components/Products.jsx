import React from 'react'
import {Link} from 'react-router-dom'



export default ({productList, addToCart})=>(
  <div className="row">
    {productList && productList.map((product)=>(
        <div className="card border-top tarjeta col-sm-4" >
          <img className="card-img-top" src={`http://staticmd1.lavozdelinterior.com.ar/sites/default/files/styles/landscape_1020_560/public/blog/roman-riquelme-1.jpg`} />
          <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h2 className="card-title">{product.price}$</h2>
          <p className="card-text">{product.description}</p>
          <p className="card-text">stock:{product.stock} </p>
          <div className="btn-group" role="group" aria-label="Basic example">
            <Link to={`/products/${product.id}`} className="btn btn-primary">ver Producto</Link>
            <Link to='/products/edit'><button type="button" className="btn btn-dark">EDIT</button></Link>
            <button onClick={()=>addToCart(product)}>add</button>
            <button type="button" className="btn btn-danger">DELETE</button>
          </div>
        </div>
      </div>
 
  ))}
  </div>
)







