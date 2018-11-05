import React from 'react'
import {Link} from 'react-router-dom'



export default ({productList})=>(
  <div className='container'>
  <div className='row'>
  
      { productList.map((product)=>(
 
<div key={product.id} className='col-sm-6 col-md-3 col-lg- 4' >
<div className="card border-top"   style={{width: "1"}} >
  <img className="card-img-top" src="" />
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <h2 className="card-title">{product.price}$</h2>
    <p className="card-text">{product.description}</p>
    <p className="card-text">stock:{product.stock} </p>
    <div className="btn-group" role="group" aria-label="Basic example">
    <Link to={`/products/${product.id}`} className="btn btn-primary">ver Producto</Link>
    <Link to='/products/edit'><button type="button" className="btn btn-dark">EDIT</button></Link>
    <button type="button" className="btn btn-danger">DELETE</button>

    </div>
    
   </div>
</div>
</div>

))}
</div>
</div>)






