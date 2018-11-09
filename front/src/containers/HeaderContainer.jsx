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
        <Redirect to="/login"/>
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
function mapDispatchToProps(dispatch, ownProps){
    return {
        logOut: function(){
            dispatch(logOutUser());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
