import React from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'

class HeaderContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
                <Header user={this.props.user}/>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
    }
}
function mapDispatchToProps(dispatch){return{}}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
