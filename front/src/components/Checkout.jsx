import React from 'react'

export default ({cantidad,items,handleSubmit})=> (
    <div className="container" style={{marginTop: '10%'}}>
        <h1 style={{color: 'white'}}>Checkout</h1>
        <form className=" w-75" onSubmit={handleSubmit}>
        <div className="form-row">
            <div className="col-md-4 mb-3">
                <label for="firstName">Nombre</label>
                <input type="text" className="form-control" id="firstName" placeholder="Nombre" required/>
            </div>
            <div className="col-md-4 mb-3">
                <label for="lastName">Apellido</label>
                <input type="text" className="form-control" id="lastName" placeholder="Apellido" required/>
            </div>
            <div className="col-md-4 mb-3">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" required/>
            </div>
        </div>
        <div className="form-row">
            <div className="col-md-6 mb-3">
                <label for="address">Dirección</label>
                <input type="text" className="form-control" id="address" placeholder="Domicilio de entrega" required/>
            </div>
        </div>
        <div className="form-row">
            <div className="col-md-4 mb-3">
                <label for="city">Ciudad</label>
                <input type="text" className="form-control" id="city" placeholder="Ciudad" required/>
            </div>
            <div className="col-md-3 mb-3">
                <label for="province">Provincia</label>
                <input type="text" className="form-control" id="province" placeholder="Provincia" required/>
            </div>
            <div className="col-md-4 mb-3">
                <label for="cellphone">Celular</label>
                <input type="text" className="form-control" id="cellphone" placeholder="Número sin 0 ni 15" required/>
            </div>
        </div>
            <button className="btn btn-primary" type="submit">Confirmar</button>
        </form>
    </div>
)