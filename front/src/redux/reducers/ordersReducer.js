

const initialState = []
export default (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_ORDERS':
      return action.orders;
    case 'CREATED_ORDER':
      return action.order;  
    default:
      return state;
  }
}