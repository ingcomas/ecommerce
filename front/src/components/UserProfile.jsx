import React from 'react';

export default props => {
    return(
        <div className="container">
            <h1>{`Bienvenido ${props.user.first_name} ${props.user.last_name}!`}</h1>
            <img src="https://media.tenor.com/images/61f264d4e7167addb805f9d16e75352d/tenor.gif"/>
            <p>{`Tu DNI es ${props.user.dni} y tu número de celular ${props.user.cellphone}`}</p>
            <button className="btn btn-primary" onClick={props.logOut}>Logout</button>
        </div>       
    )
}