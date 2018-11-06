import React from 'react';
import { connect } from 'react-redux';
import { searchForUsers } from '../redux/actions/allUsersActions';
import { convertUserToAdmin, removeAdminPermission } from '../redux/actions/userActions';

class AdminProfile extends React.Component{
    constructor(props){
        super(props);
        this.turnIntoAdmin = this.turnIntoAdmin.bind(this);
        this.removeAdmin = this.removeAdmin.bind(this);
    }

    componentDidMount(){
        this.props.getAllUsers();
    }

    turnIntoAdmin(e){
        this.props.turnIntoAdmin(e.target.value);
    }

    removeAdmin(e){
        this.props.removeAdmin(e.target.value);
    }

    render(){
        return(
            <div className="container">{console.log(this.props.allUsers)}
                <h1 style={{color: 'white'}}>Bienvenido admin</h1>
                <ul>
                    <h2 style={{color: 'white'}}>E-mails</h2>
                    {
                        this.props.allUsers && this.props.allUsers.map(user => {
                            return (
                                <div key={user.id} style={{color:'white'}}>
                                    <li>
                                        {user.first_name} | {user.email}
                                        {
                                            user.access == true ?
                                                <button className="btn btn-sm btn-danger" onClick={this.removeAdmin} value={user.email}>Remove admin</button>
                                            :
                                                <button className="btn btn-sm btn-success" onClick={this.turnIntoAdmin} value={user.email}>Turn to admin</button>                                       
                                        }
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
                <button className="btn btn-primary" onClick={this.props.logOut}>Logout</button>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return{
        allUsers: state.allUsers,
        state
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return{
        getAllUsers: function(){
            dispatch(searchForUsers());
        },
        turnIntoAdmin: function(email){
            dispatch(convertUserToAdmin(email));
        },
        removeAdmin : function(email){
            dispatch(removeAdminPermission(email));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);