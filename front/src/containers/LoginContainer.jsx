import React from 'react';
import Login from '../components/Login';
import axios from 'axios';

import PrivateProfileContainer from './PrivateProfileContainer';

export default class  extends React.Component{
    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            address: '',
            dni: '',
            cellphone: '',

            wrongPassword: ''
        }
        this.logInfo = this.logInfo.bind(this);
    }

    logInfo(e){
        e.preventDefault();
        axios.post('/api/user/logged', {
            email: e.target.email.value,
            password: e.target.password.value
        })
        .then(r => {
            this.setState({
                first_name: r.data.first_name,
                last_name: r.data.last_name,
                email: r.data.email,
                address: r.data.address,
                dni: r.data.dni,
                cellphone: r.data.cellphone
            })}
        )
        .catch(e => {
            this.setState({
                wrongPassword: 'Contraseña incorrecta'
            })
        })
    }

    render(){
        return(
            <div>
                {this.state.first_name ? 
                    <PrivateProfileContainer
                        first_name={this.state.first_name}
                        last_name={this.state.last_name}
                        email={this.state.email}
                        address={this.state.address}
                        dni={this.state.dni}
                        cellphone={this.state.cellphone}
                    />
                :
                    <Login
                        logInfo={this.logInfo}
                        wrongPassword={this.state.wrongPassword}
                    />
            }
            </div>
        )
    }
}