const initialState = {}
export default (state = initialState, action) => {
    switch(action.type){
        case 'LOG_WITH_USER':
            return Object.assign({}, state, action.user);
        case 'WRONG_PASSWORD':
            return Object.assign({}, state, {wrongPassword: action.message});
        case 'LOG_OUT_USER':
            return Object.assign({}, state, action.user);
        case 'UPDATE_ADMIN_STATE':
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
}