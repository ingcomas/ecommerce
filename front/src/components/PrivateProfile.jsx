import React from 'react';
import AdminProfile from '../components/AdminProfile';
import UserProfile from '../components/UserProfile';

export default (props) => {
    return(
        <div>
            {
                props.user.access == true ? 
                    <AdminProfile
                        logOut={props.logOut}
                    />
                :
                    <UserProfile user={props.user} logOut={props.logOut}/> 
            }
        </div>
    )
}