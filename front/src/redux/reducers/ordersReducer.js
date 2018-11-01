

const initialState = []
export default (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_ORDERS':
      return action.orders;    
    default:
      return state;
  }
}