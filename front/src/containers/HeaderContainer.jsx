import React from 'react'
import Header from '../components/Header'

class HeaderContainer extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    console.log('2222');
    return (
        <div>
        <Header />
        </div>
    )
}
}
export default HeaderContainer;