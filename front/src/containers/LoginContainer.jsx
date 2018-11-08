import React from 'react';
import {connect} from 'react-redux';
import Login from '../components/login';
import PrivateProfile from '../components/PrivateProfile';
import { loginUser, logOutUser } from '../redux/actions/userActions';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logOut = this.logOut.bind(this);
    }

handleSubmit(e){
    e.preventDefault();
    this.props.sendLoginInfo(e.target.email.value, e.target.password.value);
}

logOut(e){
    this.props.logOut();
}
    render(){
        return(
            
            <div className="container">
            {console.log(this.props.user.first_name)
            }
                    {this.props.user.first_name ?                    
                        <PrivateProfile                           
                            logOut={this.logOut}
                        />
                    : 
                        <Login 
                            handleSubmit={this.handleSubmit} 
                            wrongPassword={this.props.user.wrongPassword}
                        />

                        
                    }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return{
        user: state.user,
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return{
        sendLoginInfo : function(email, password){
            dispatch(loginUser(email, password));
        },
        logOut: function(){
            dispatch(logOutUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);