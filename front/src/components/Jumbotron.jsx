import React from 'react';

export default () => {
    return(
        <div className="container jumbotron">
            <h1 className="display-4">Tuviejalibre</h1>
            <p className="lead">50 LUCAS O NADA</p>
            <hr className="my-4"/>
            <p>By Santi Fernández, Sebastián Comas, Javier Cardozo, Santi Casanova y Ale Wilcke</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/register" role="button">Registrarse</a>
                <a className="btn btn-primary btn-lg" href="/login" role="button">Ingresar</a>
            </p>
        </div>
    )
}