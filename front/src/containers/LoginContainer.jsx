import React from 'react';
import Login from '../components/Login';
import axios from 'axios';

export default class extends React.Component{
    constructor(){
        super();
        this.logInfo = this.logInfo.bind(this);
    }

    logInfo(e){
        axios.post('/api/loginUser', {
            email: e.target.email.value,
            password: e.target.password.value
        })
    }

    render(){
        return(
            <Login logInfo={this.logInfo}/>
        )
    }
}