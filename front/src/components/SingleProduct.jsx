import React from 'react'

import {Link} from 'react-router-dom';

export default ({product, addToCart})=> (
<div className="row single-product">
     
      { product && <div className="col-sm-10 col-md-8 col-lg-8 cont-img-single-product">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 img-single-product" src="https://static.netshoes.com.ar/produtos/zapatillas-nike-tanjun/59/001-3204-059/001-3204-059_detalhe1.jpg?resize=326:*" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 img-single-product" src="https://dexter.vteximg.com.br/arquivos/ids/387059-540-540/921694011_1.jpg?v=636673437470100000" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 img-single-product" src="https://http2.mlstatic.com/zapatillas-de-cuero-hombre-fierros-art-09-talle-46-D_NQ_NP_737449-MLA25860951412_082017-F.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
    } 
   
    {/* { product && <div className="col-sm-2 col-md-4 col-lg-4 cont-props-single-product">
     
       <h2> {product.price}</h2>
      <p> STOCK: {product.stock}</p>
       <p> {product}</p>
      <p> {product}</p> 
      <button onClick={()=>addToCart(product)}>add</button>
    </div> 
   }  */}
 
  

</div>
)

