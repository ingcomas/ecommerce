const initialSate ={};

export default (state = initialSate,action)=>{
    switch (action.type) {
        case 'GET_CATEGORIES':
            return Object.assign({},state,{categories : action.categories})        
        default:
            return state;
    }
}
