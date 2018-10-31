import React from 'react';

export default (props) => {
    return(
        <div className="container">
            <form onSubmit={props.registerNewUser}>
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" name="first_name" class="form-control" aria-describedby="emailHelp" placeholder="Nombre"/>
                </div>
                <div class="form-group">
                    <label>Apellido/s</label>
                    <input type="text" name="last_name" class="form-control" aria-describedby="emailHelp" placeholder="Apellido/s"/>
                </div>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email" name="email" class="form-control" aria-describedby="emailHelp" placeholder="E-mail"/>
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" class="form-control" aria-describedby="emailHelp" placeholder="Contraseña"/>
                </div>
                <div class="form-group">
                    <label>Dirección</label>
                    <input type="text" name="address" class="form-control" aria-describedby="emailHelp" placeholder="Dirección"/>
                </div>
                <div class="form-group">
                    <label>DNI</label>
                    <input type="text" name="dni" class="form-control" aria-describedby="emailHelp" placeholder="DNI"/>
                </div>
                <div class="form-group">
                    <label>Celular</label>
                    <input type="text" name="cellphone" class="form-control" aria-describedby="emailHelp" placeholder="Celular"/>
                </div>
                <button type="submit" class="btn btn-primary">Registrarse</button>
            </form>
        </div>
    )
}