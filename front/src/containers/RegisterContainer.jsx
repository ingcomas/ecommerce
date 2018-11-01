//REQUIREMENTS
import axios from 'axios';
import React from 'react';

//COMPONENTS
import Register from '../components/Register';
import UserCreated from '../components/UserCreated';


export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            wrongMail: '',
            wrongPassword: '',
            userCreated: '',
        }
        this.registerNewUser = this.registerNewUser.bind(this);
    }

    registerNewUser(e){
        e.preventDefault();
        axios.post('/api/user/newUser', {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            address: e.target.address.value,
            dni: e.target.dni.value,
            cellphone: e.target.cellphone.value
        })
        .then(response => {
            switch(response.data.name){

                case 'SequelizeValidationError':
                    this.setState({ wrongPassword: '**************** La contraseña debe tener entre 8 y 12 caracteres.' });
                break;

                case 'SequelizeUniqueConstraintError':
                    this.setState({ wrongMail: '**************** El e-mail solicitado ya está en uso.' });
                break;

                default:
                    this.setState({ userCreated: true });
            }
        });
    }

    render(){
        return(
            <div className="container">
                { this.state.userCreated == true ? <UserCreated/>
                :
                    <Register 
                        registerNewUser={this.registerNewUser}
                        wrongMail={this.state.wrongMail}
                        wrongPassword={this.state.wrongPassword}
                    />
                }
            </div>
        )
    }
}