import React from 'react';

export default (props) => {
    return(
        <div className="container">
            <label>Registrate!</label>
            <form onSubmit={props.registerNewUser}>
                <label>Nombre </label><input type="text" name="first_name"/><br/>
                <label>Apellido/s </label><input type="text" name="last_name"/><br/>
                <label>E-mail </label><input type="email" name="email"/><br/>
                <label>Contraseña</label><input type="password" name="password"/><br/>
                <label>Dirección</label><input type="text" name="address"/><br/>
                <label>DNI </label><input type="text" name="dni"/><br/>
                <label>Celular </label><input type="text" name="cellphone"/><br/>
                <input type="submit" value="Registrarse"/>
            </form>
        </div>
    )
}