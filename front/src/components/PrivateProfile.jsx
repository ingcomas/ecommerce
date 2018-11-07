import React from 'react';
import AdminProfile from '../components/AdminProfile';
import UserProfile from '../components/UserProfile';
import { Redirect } from 'react-router-dom';

export default (props) => {
    return(
        <div>
            {
                props.user.access == true ? 
                    <Redirect to="/profile"/>
                :
                    <UserProfile user={props.user} logOut={props.logOut}/> 
            }
        </div>
    )
}