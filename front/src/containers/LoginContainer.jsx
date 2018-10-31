import React from 'react';
import Login from '../components/Login';

export default class extends React.Component{
    constructor(){
        super();
        this.logInfo = this.logInfo.bind(this);
    }

    logInfo(e){
        e.preventDefault();
    }

    render(){
        return(
            <Login logInfo={this.logInfo}/>
        )
    }
}