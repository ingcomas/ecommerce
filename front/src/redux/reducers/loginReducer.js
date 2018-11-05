const initialState = {}
export default (state = initialState, action) => {
  switch(action.type) {
    case 'RECIVE_LOGIN':
      return Object.assign({},state,{login:action.user})    
    default:
      return state;
  }
}