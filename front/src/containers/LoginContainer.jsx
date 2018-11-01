import React from 'react';
import Login from '../components/Login';
import axios from 'axios';

import PrivateProfileContainer from './PrivateProfileContainer';

export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            logged: false
        }
        this.logInfo = this.logInfo.bind(this);
    }

    logInfo(e){
        e.preventDefault();
        axios.post('/api/user/logged', {
            email: e.target.email.value,
            password: e.target.password.value
        })
        .then(response => {
            this.setState({
                logged: response.data
            })
        });
    }

    render(){
        return(
            <div>
                {this.state.logged ? <PrivateProfileContainer/>
                :
                    <Login logInfo={this.logInfo}/>
            }
            </div>
        )
    }
}