import React from 'react';

export default (props) => {
    return(
        <div className="container">
            <form onSubmit={props.registerNewUser}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" name="first_name" className="form-control" aria-describedby="emailHelp" placeholder="Nombre"/>
                </div>
                <div className="form-group">
                    <label>Apellido/s</label>
                    <input type="text" name="last_name" className="form-control" aria-describedby="emailHelp" placeholder="Apellido/s"/>
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="E-mail"/>
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" className="form-control" aria-describedby="emailHelp" placeholder="Contraseña"/>
                </div>
                <div className="form-group">
                    <label>Dirección</label>
                    <input type="text" name="address" className="form-control" aria-describedby="emailHelp" placeholder="Dirección"/>
                </div>
                <div className="form-group">
                    <label>DNI</label>
                    <input type="text" name="dni" className="form-control" aria-describedby="emailHelp" placeholder="DNI"/>
                </div>
                <div className="form-group">
                    <label>Celular</label>
                    <input type="text" name="cellphone" className="form-control" aria-describedby="emailHelp" placeholder="Celular"/>
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    )
}