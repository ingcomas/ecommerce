import React from 'react';

export default (props) => {
    return(
        <div className="container">
            <form onSubmit={props.logInfo}>
                <input type="text" name="email" placeholder="E-mail"/><br/>
                <input type="password" name="password" placeholder="Pasword"/><br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}