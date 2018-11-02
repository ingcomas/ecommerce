import React from 'react';
import Login from '../components/Login';
import axios from 'axios';
import {connect} from 'react-redux';
import {logInfo} from '../redux/actions/login-action'

import PrivateProfileContainer from './PrivateProfileContainer';

class LoginContainer extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     first_name: '',
        //     last_name: '',
        //     email: '',
        //     address: '',
        //     dni: '',
        //     cellphone: '',
        //     password:'',
        //     wrongPassword: ''
        // }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        var email= e.target.email.value
        var password= e.target.password.value

        this.props.logInfo(email,password);
        
        // axios.post('/api/user/logged', {
        //     email: e.target.email.value,
        //     password: e.target.password.value
        // })
        // .then(r => this.setState({
        //     first_name: r.data.first_name,
        //     last_name: r.data.last_name,
        //     email: r.data.email,
        //     address: r.data.address,
        //     dni: r.data.dni,
        //     cellphone: r.data.cellphone
        // }))
        // .catch(e => {
        //     this.setState({
        //         wrongPassword: 'Contraseña incorrecta'
        //     })
        // })
    }

    render(){
        return(
            <div>
            <Login logInfo={this.handleSubmit} />            
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
    }
}
function mapDispatchToProps(dispatch){
    return { logInfo: function(email,password){
            dispatch(logInfo(email,password))
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
