import React from 'react';

// export default props => {
//     return(
//         <div className="container">
//             <h1>{`Bienvenido ${props.user.first_name} ${props.user.last_name}!`}</h1>
//             <img src="https://media.tenor.com/images/61f264d4e7167addb805f9d16e75352d/tenor.gif"/>
//             <p>{`Tu DNI es ${props.user.dni} y tu número de celular ${props.user.cellphone}`}</p>
//             <button className="btn btn-primary" onClick={props.logOut}>Logout</button>
//         </div>       
//     )
// }

export default ({user,logOut})=>{
    return (
<div className="row mt-5">
<div className="row mt-5">


    <div className="">
        <div className="col-sm-12 col-md-12 col-lg-12">
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Orden N°<br></br><span>Estado: </span><span className="text-success"><strong>In Stock</strong></span></th>
                        <th className="align-middle">Cantidad</th>
                        <th className="align-middle text-center">Precio</th>
                        <th className="align-middle text-center">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="col-sm-8 col-md-6 col-lg-6">
                        <div className="media">
                            <a className="thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{width: '60px', height: '60px'}}/> </a>
                            <div className="media-body">
                                <h5 className="media-heading"><a href="#">Product name muy largo</a></h5>               
                            </div>
                        </div>
                        </td>
                        <td className="col-sm-1 col-md-1 align-middle text-center" >
                        <strong>3</strong>
                        </td>
                        <td className="col-sm-1 col-md-1 align-middle text-right"><strong>$4.87</strong></td>
                        <td className="col-sm-1 col-md-1 align-middle text-right"><strong>$14.61</strong></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td><h4><span>Total</span></h4></td>
                        <td className="text-right"><h5><strong>$31.53</strong></h5></td>
                    </tr>                  
                </tbody>
            </table>
        </div>
    </div>
</div>

</div>
    )
}
// https://bootsnipp.com/snippets/featured/shopping-cart-bs-3