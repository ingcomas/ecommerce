const initialSate ={};

export default (state = initialSate,action)=>{
    switch (action.type) {
        case 'NEW_PRODUCT':
            return Object.assign({},state,{newProduct:action.newProduct})        
        case 'SEARCH':
            return Object.assign({}, state, {search : action.search})
        default:
            return state;
    }
}
