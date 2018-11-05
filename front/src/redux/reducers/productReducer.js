const initialSate ={};

export default (state = initialSate,action)=>{
    switch (action.type) {
        case 'NEW_PRODUCT':
            return Object.assign({},state,{newProduct:action.newProduct})        
    
        default:
            return state;
    }
}
