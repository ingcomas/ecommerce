import React from 'react';
import Login from '../components/Login';
import axios from 'axios';
import {connect} from 'react-redux';
import {logInfo} from '../redux/actions/login-action'
import PrivateProfile from '../components/PrivateProfile';

export default class LoginContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            address: '',
            dni: '',
            cellphone: '',
            password:'',
            access: false,
            wrongPassword: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logOut = this.logOut.bind(this);
        this.assignAdmin = this.assignAdmin.bind(this);
    }

    handleSubmit(e){
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
                cellphone: r.data.cellphone,
                access: r.data.access
            })}
        )
        .catch(e => {
            this.setState({
                wrongPassword: 'Contraseña incorrecta'
            })
        })
    }

    logOut(e){
        axios.get('/api/user/logout')
        .then(res => {
            this.setState({
                first_name: '',
                last_name: '',
                email: '',
                address: '',
                dni: '',
                cellphone: '',
                password:'',
                access: false,

                wrongPassword: '',

                allUsers: []
            })
        })
    }

    componentDidMount(){
        axios.get('/api/user/allUsers')
        .then(res => this.setState({
            allUsers: res.data
        }));
    }

    assignAdmin(){
        axios.post('/api/user/createAdmin', {email: 'aleee9208@hotmail.com'})
    }

    render(){
        return(
            <div>
                {
                    this.state.first_name != '' ? 
                        <PrivateProfile
                            first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            dni={this.state.dni}
                            cellphone={this.state.cellphone}
                            access={this.state.access}

                            logOut={this.logOut}

                            allUsers={this.state.allUsers}
                        />
                    :
                        <Login
                            logInfo={this.handleSubmit}
                            wrongPassword={this.state.wrongPassword}
                            assignAdmin={this.assignAdmin}
                        />
                }
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return {
//     }
// }

// function mapDispatchToProps(dispatch){
//     return { logInfo: function(email,password){
//             dispatch(logInfo(email,password))
//         }

//     }
// }

//export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
