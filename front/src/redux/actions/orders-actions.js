import axios from 'axios';
import {destroyCart} from './CartActions'
const receiveOrders = (orders) => ({
    type: 'RECEIVE_ORDERS',
    orders
  });
const createdOrder = (order) => ({
    type:'CREATED_ORDER',
    order
})

export const fetchOrders = (orderSearch = '') => (dispatch) => {    
    axios.get('/api/user/admin/orders/',{
        params: {
            state:orderSearch
            }
        })
    .then(res => res.data)
    .then(orders => dispatch(receiveOrders(orders)))
    // .then(()=>axios.get('/api/checkout/email'))    
}

export const createOrder = (params,id,items) => (dispatch)=>{
    var array=[];
    items.map(item=>{
        for (let i = 0; i < item.quantity; i++) {array.push(item.product.id); }
        })
    axios.post('/api/checkout',{
        id:id,
        firstName: params.firstName.value,
        lastName: params.lastName.value,
        address: params.address.value,
        city: params.city.value,
        province: params.province.value,
        email: params.email.value,
        cellphone: params.cellphone.value,
        products:array,
    })
    .then(res=>res.data)
    .then(order=>{
        axios.post('/api/checkout/email',{orden:order})             
        dispatch(destroyCart())
    })
}
export const changeOrder = (param,id) => (dispatch) =>{
    axios.put('/api/checkout/update',{
        estado: param,
        id:id
    })
    .then(order=>{
        axios.post('/api/checkout/email',{orden:order.data})
    })
}
export const getOrdersUser = (id) => (dispatch) => {
    
    axios.get('/api/user/admin/orders/prueba',{  
        params: {
            id:id
        }
    })
    .then(res => res.data)
    .then(orders => {   
        var oPs=[];
        Promise.all(
        orders.map(order=>{ // esto en un arreglo de objetos, donde cada objeto tiene todo los datos de la orden
            var prod = {}; 
            var objeto = order.products.reduce((acc,cv)=>{
                acc[cv]=acc[cv] == undefined ? 1: acc[cv] + 1;
                return acc;
                },{})      //objeto = {'1':2,'2':1,'3':2}                
                
            return Promise.all(
                Object.keys(objeto).map(id=>{                    
                return axios.get(`/api/product/${id}`) // res.data tiene TODO el objeto producto {id,name,stock,etc...}
                .then(res=>{res.data.cant=objeto[id]                        
                        return res.data
                        })
                })
                )
                .then(promises=>{
                    prod.state=order.state;
                    prod.id=order.id;
                    prod.products=promises;
                    prod.date=order.createdAt;
                    oPs.push(prod)                    
                })
        })
        ).then(()=>dispatch(receiveOrders(oPs)))       
                console.log('promesas internas',oPs);
                

        
    // dispatch(receiveOrders(oPs))
})
}
// export const getProductsOrders = (orders) => (dispatch) => {
//     orders.map(order => {
//         order.products.map
//     })
// }