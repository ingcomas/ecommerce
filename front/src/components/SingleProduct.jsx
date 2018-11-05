import React from 'react'
import {Link} from 'react-router-dom';

export default ({product})=> (

  <div className="container">
    {product &&
    <div className="row">
     
        <div className="col-8"> 
          <img                src="https://www.jensonusa.com/globalassets/product-images---all-assets/shimano/br183c00-black.jpg" alt=""/> 
        </div>
        <div className="col-4">
          <h1>STOCK: {product.stock} </h1>    
          <h1>PRECIO: {product.price} </h1>    
        </div>
    </div> 
      
     } 
    
    
  </div>
)

