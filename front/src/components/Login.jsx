import React from 'react';

export default (props) => {
    return(
        <div className="container">
            <form onSubmit={props.logInfo}>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" name="email" className="form-control" placeholder="E-mail"/>
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" className="form-control" placeholder="Contraseña"/>
                </div>
            </form>
        </div>
    )
}