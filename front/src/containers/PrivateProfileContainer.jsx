import React from 'react';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <h1>{`Bienvenido ${this.props.first_name} ${this.props.last_name}!`}</h1>
                <img src="https://media.tenor.com/images/61f264d4e7167addb805f9d16e75352d/tenor.gif"/>
                <p>{`Tu DNI es ${this.props.dni} y tu número de celular ${this.props.cellphone}`}</p>
            </div>
        )
    }
}