import React from 'react'

export default ({items,handleSubmit,user})=> (
    <div className="col-sm-9" style={{marginTop: '10%'}}>
        <h1 style={{color: 'white'}}>Checkout</h1>
        {console.log(items)}
        {items!='' ? 
        <form className=" w-75" onSubmit={handleSubmit}>
        <div className="form-row">
            <div className="col-md-4 mb-3">
                <label>Nombre</label>
                <input type="text" className="form-control" id="firstName" placeholder="Nombre" required/>
            </div>
            <div className="col-md-4 mb-3">
                <label >Apellido</label>
                <input type="text" className="form-control" id="lastName" placeholder="Apellido" required/>
            </div>
            <div className="col-md-4 mb-3">
                <label>Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" required/>
            </div>
        </div>
        <div className="form-row">
            <div className="col-md-6 mb-3">
                <label>Dirección</label>
                <input type="text" className="form-control" id="address" placeholder="Domicilio de entrega" required/>
            </div>
        </div>
        <div className="form-row">
            <div className="col-md-4 mb-3">
                <label>Ciudad</label>
                <input type="text" className="form-control" id="city" placeholder="Ciudad" required/>
            </div>
            <div className="col-md-3 mb-3">
                <label>Provincia</label>
                <input type="text" className="form-control" id="province" placeholder="Provincia" required/>
            </div>
            <div className="col-md-4 mb-3">
                <label>Celular</label>
                <input type="text" className="form-control" id="cellphone" placeholder="Número sin 0 ni 15" required/>
            </div>
        </div>
            <button className="btn btn-primary" type="submit">Confirmar</button>
        </form>
        :
        <div className="alert alert-warning" role="alert">
            Que te parece si agregas algunos productos al carrito?
        </div>
        }
    </div>
)