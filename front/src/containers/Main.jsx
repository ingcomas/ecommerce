import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import HeaderContainer from './HeaderContainer';

import Login from '../components/Login';
import Register from '../components/Register';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.logInfo = this.logInfo.bind(this);
    }

    logInfo(e){
        console.log(e.target.email.value);
        e.preventDefault();
    }
    render(){
        return (
            <div>
                <HeaderContainer/>
                <Login logInfo={this.logInfo}/><br/>
                <Register/>
            </div>
        )
    }
}

