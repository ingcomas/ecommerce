import React from 'react';
import {Route,Switch} from 'react-router-dom'
// import Home from '../components/Home'
import SearchContainer from '../containers/SearchContainer'
// import Movie from '../components/Movie'

class Main extends React.Component{
    constructor(props){
        super(props);
        
    }
render(){
    return(
        <div>
            {/* <Switch> */}
                {/* <Route exact path='/home' component={Home} /> */}
                <Route path='/' component={SearchContainer} />
                {/* <Route patch='/movie/:movieId' component={Movie} /> */}
                {/* <Redirect from='/' to='/home' /> */}
            {/* </Switch> */}
        </div>
    )
}

}
export default Main;