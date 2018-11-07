import React from 'react';
import {Redirect} from 'react-router-dom'
import AdminProfile from '../components/AdminProfile';
import UserProfile from '../components/UserProfile';
import {connect} from 'react-redux'

class PrivateProfileContainer extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <div>
            {/* {
<<<<<<< HEAD
                this.props.user.access == true ? 
                    <Redirect to='/user/admin' />
                    // <AdminProfile logOut={props.logOut}/>
=======
                props.user.access == true ? 
                    <AdminProfile
                        logOut={props.logOut}
                    />
>>>>>>> ae9604d772d382cd7b99bf18147587dc3c4c0939
                :
            } */}
                    <UserProfile user={this.props.user} logOut={this.props.logOut}/> 
        </div>
    )
}
}
function mapStateToProps(state){
    return { user: state.user,

    }
}
function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PrivateProfileContainer)
