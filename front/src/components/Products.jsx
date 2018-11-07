import React from 'react'
import {Link} from 'react-router-dom'
import CartContainer from '../containers/CartContainer'



export default ({productList, addToCart, handleClick})=>(

  <div className='row'>
   {productList && productList.map((product)=>(
   
      
       <div key={product.id} className='col-sm-3 col-md-3 col-lg-3 col-xs-3' >
          <div className="card border-top tarjeta" >
          <Link to={`/products/${product.id}`}>
            <img className="card-img-top" src={`http://staticmd1.lavozdelinterior.com.ar/sites/default/files/styles/landscape_1020_560/public/blog/roman-riquelme-1.jpg`} />
          </Link> 
            <div className="card-body tarjeta-body">
            <Link to={`/products/${product.id}`}>
            <h5 className="card-title">{product.name}</h5>
            </Link> 
            <h2 className="card-title">{product.price}$</h2>
            <p className="card-text">{(product.description).slice(0,45)}</p>
            <p className="card-text">stock:{product.stock} </p>
             
            <div className="btn-group " role="group" aria-label="Basic example">
              <Link to= {`/products/${product.id}/edit`}><button onClick= { handleClick } id= {product.id} type="button" className="btn btn-dark">EDIT</button></Link>
              <button onClick={()=>addToCart(product)}>add</button>
              <button type="button" className="btn btn-danger">DELETE</button>
            </div>
          </div>
        </div>
      </div>
      ))}
  </div>

)







