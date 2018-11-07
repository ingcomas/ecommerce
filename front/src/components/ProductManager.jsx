import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
	<div className='container' style={{marginTop : '5rem'}}>
		<div className='row'>
			<div className='col-sm-6 col-md-4 col-lg-3'>
				<div className="card" style={{width: '12rem', margin : '2rem'}}>
					<img className="card-img-top" src="https://cdn1.iconfinder.com/data/icons/line-christmas-icons/75/_gift-512.png" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">New Product</h5>
						<p className="card-text">Creación de nuevo producto.</p>
						<Link to='/products/newproduct' className="btn btn-primary">Go somewhere</Link>
					</div>
				</div>
			</div>
			<div className='col-sm-6 col-md-4 col-lg-3'>
				<div className="card" style={{width: '12rem', margin : '2rem'}}>
					<img className="card-img-top" src="https://image.flaticon.com/icons/svg/126/126794.svg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Edit Product</h5>
						<p className="card-text">Editar producto existente.</p>
						<Link to='/products' className="btn btn-primary">Go somewhere</Link>
					</div>
				</div>
			</div>
			<div className='col-sm-6 col-md-4 col-lg-3'>
				<div className="card" style={{width: '12rem', margin : '2rem'}}>
					<img className="card-img-top" src="https://cdn3.iconfinder.com/data/icons/website-panel-icons/128/test1-11-512.png	" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">New Category</h5>
						<p className="card-text">Creación de nueva categoría.</p>
						<Link to='/categories/newcategory' className="btn btn-primary">Go somewhere</Link>
					</div>
				</div>
			</div>
			<div className='col-sm-6 col-md-4 col-lg-3'>
				<div className="card" style={{width: '12rem', margin : '2rem'}}>
					<img className="card-img-top" src="https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Edit users</h5>
						<p className="card-text">Eliminar o editar usuarios.</p>
						<Link to='/profile/admin' className="btn btn-primary">Go somewhere</Link>
					</div>
				</div>
			</div>
			<div className='col-sm-6 col-md-4 col-lg-3'>
				<div className="card" style={{width: '12rem', margin : '2rem'}}>
					<img className="card-img-top" src="https://cdn3.iconfinder.com/data/icons/rest/30/add_order-512.png" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Edit orders</h5>
						<p className="card-text">Eliminar o editar ordenes.</p>
						<Link to='/user/admin/orders' className="btn btn-primary">Go somewhere</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
)





