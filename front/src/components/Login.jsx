import React from 'react';

export default (props) => {
    return(
        <div className="container">
            <form onSubmit={props.logInfo}>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email" name="email" class="form-control" placeholder="E-mail"/>
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" class="form-control" placeholder="Contraseña"/>
                </div>
            </form>
        </div>
    )
}