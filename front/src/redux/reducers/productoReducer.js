
const initialState = {
    name:'',
}

export default (state=initialState,action) => {
    switch (action.type) {
        case 'CHANGE_PRUDUCT':
            return Object.assign({},state, {name:action.name});
    
        default:
            return state;
    }
}