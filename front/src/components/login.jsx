import React from 'react';

export default (props) => {
    return(
        <div className="container w-25" style={{marginTop: '10%'}}>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" name="email" className="form-control" placeholder="E-mail"/>
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" className="form-control" placeholder="Contraseña"/>
                    {props.wrongPassword ? <div className="alert alert-danger">{props.wrongPassword}</div> : null}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}