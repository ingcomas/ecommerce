import axios from 'axios';
const receiveOrders = (orders) => ({
    type: 'RECEIVE_ORDERS',
    orders
  });

export const fetchOrders = (orderSearch = '') => (dispatch) => {
    console.log('action',orderSearch);
    
    axios.get('/api/user/admin/orders/',{
        params: {
            state:orderSearch
            }
        })
    .then(res => res.data)
    .then(orders => dispatch(receiveOrders(orders)))
    
}