import React from 'react';

export default () => {
    return(
        <div className="container">
            <label>Registrate!</label>
            <form>
                <label>Nombre </label><input type="text" name="first_name"/><br/>
                <label>Apellido/s </label><input type="text" name="last_name"/><br/>
                <label>E-mail </label><input type="email" name="email"/><br/>
                <label>Contraseña</label><input type="password" name="password"/><br/>
            </form>
        </div>
    )
}