import React from 'react';

export default (props) => {
    return(
        <div className="container">
            <h1 style={{color: 'white'}}>Bienvenido admin</h1>
            <ul>
                <h2 style={{color: 'white'}}>E-mails</h2>
                {
                    props.allUsers.map(user => {
                        return(
                            <li style={{color: 'white'}}>{user.email}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}