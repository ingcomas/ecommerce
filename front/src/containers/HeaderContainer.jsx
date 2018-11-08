import React from 'react'
import Header from '../components/Header'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { logOutUser } from '../redux/actions/userActions';

class HeaderContainer extends React.Component{
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    logOut(e){
        <Redirect to="/"/>
        this.props.logOut();
    }
    render(){
        return (
                <Header 
                    user={this.props.user}
                    logOut={this.logOut}
                />
        )
    }
} 

function mapStateToProps(state, ownProps){
    return {
        user: state.user,
    }
}
<<<<<<< HEAD
function mapDispatchToProps(dispatch){return{
    
}}
=======
function mapDispatchToProps(dispatch, ownProps){
    return {
        logOut: function(){
            dispatch(logOutUser());
        }
    }
}
>>>>>>> 8f0e2d253f853b8dd6f5a1ac7a1644318d6693d8

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
