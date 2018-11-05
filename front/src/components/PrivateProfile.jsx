import React from 'react';
import AdminProfile from '../components/AdminProfile';
import UserProfile from '../components/UserProfile';

export default (props) => {
    return(
        <div>
            {
                props.access == true ? 
                    <AdminProfile
                        allUsers={props.allUsers}
                    />
                :
                    <UserProfile 
                        logOut={props.logOut}
                        first_name={props.first_name}
                        last_name={props.last_name}
                        dni={props.dni}
                        cellphone={props.cellphone}
                    /> 
            }
        </div>
    )
}