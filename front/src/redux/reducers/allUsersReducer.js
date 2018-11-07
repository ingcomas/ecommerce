const initialState = []

export default (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALL_USERS':
            return [...action.allUsers];
        default:
            return state;
    }
}