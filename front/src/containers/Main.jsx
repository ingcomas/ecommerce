import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//CONTAINERS
import HeaderContainer from './HeaderContainer';
import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from '../containers/LoginContainer';
import Jumbotron from '../components/Jumbotron';
import SidebarContainer from './SidebarContainer';

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <SidebarContainer/>
                <HeaderContainer/>
                <Switch>
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route exact path="/" component={Jumbotron}/>
                </Switch>
            </div>
        )
    }
}