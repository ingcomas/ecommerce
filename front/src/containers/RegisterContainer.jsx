import React from 'react';
import Register from '../components/Register';
import axios from 'axios';

export default class extends React.Component{
    constructor(){
        super();
    }

    registerNewUser(e){
        axios.post('/api/newUser', {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            address: e.target.address.value,
            dni: e.target.dni.value,
            cellphone: e.target.cellphone.value
        })
        e.preventDefault();
    }

    render(){
        return(
            <div className="container">
                <Register registerNewUser={this.registerNewUser}/>
            </div>
        )
    }
}