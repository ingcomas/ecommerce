import React from 'react'

export default ({orders,handleSelect})=>{
    return (
        <div>
            <h3 className="p-3 mb-2 bg-dark text-white">Ordenes de compra</h3>
            <table className='table table-hover table-dark' >
                <thead>
                <tr>
                    
                    <th scope="col">Id</th>
                    <th scope="col">Estado</th>
                    <th scope="col">dirección</th>
                    <th scope="col">Email</th>
                    <th scope="col">Celular</th>
                    <th scope="col">Productos</th>
                </tr>
                </thead>
                <tbody>
                {orders && orders.map(order => 
                    <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>
                
                <select value={order.state} className="custom-select" onChange={(e)=> handleSelect(e,order.id)}>
                    <option className='sId1' value={'created'}>Created</option>
                    <option className='sId2' value={'processing'}>Processing</option>
                    <option className='sId3' value={'cancelled'}>Cancelled</option>
                    <option className='sId4' value={'completed'}>Completed</option>
                </select>
                
                    </td>
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