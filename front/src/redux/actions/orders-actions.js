import axios from 'axios';
const receiveOrders = (orders) => ({
    type: 'RECEIVE_ORDERS',
    orders
  });

export const fetchOrders = (orderSearch = '') => (dispatch) => {    
    axios.get('/api/user/admin/orders/',{
        params: {
            state:orderSearch
            }
        })
    .then(res => res.data)
    .then(orders => dispatch(receiveOrders(orders)))    
}

export const createOrder = (params,items) => (dispatch)=>{
    var array=[];
    items.map(item=>array.push(item.id))
    axios.post('/api/checkout',{
        firstName: params.firstName.value,
        lastName: params.lastName.value,
        address: params.address.value,
        city: params.city.value,
        province: params.province.value,
        email: params.email.value,
        cellphone: params.cellphone.value,
        products:array,
    })
}