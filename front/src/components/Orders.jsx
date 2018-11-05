import React from 'react'

export default ({orders})=>{
    return (
        <div>
            <h3>Ordenes de compra</h3>
            <table className='table'>
                <thead>
                <tr>
                    
                    <th>Id</th>
                    <th>Estado</th>
                    <th>dirección</th>
                    <th>Email</th>
                    <th>Celular</th>
                    <th>Productos</th>
                </tr>
                </thead>
                <tbody>
                    {console.log('orders',orders)
                    }
                {orders && orders.map(order => 
                    <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.state}</td>
                    <td>{order.address}</td>
                    <td>{order.email}</td>
                    <td>{order.cellphone}</td>
                    <td>{order.products}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}