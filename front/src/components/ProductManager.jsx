import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
	<div className='container'>
		<div className='row'>
			<div className='col-sm-4'>
				<div className="card" style={{width: '13rem'}}>
					<img className="card-img-top" src="https://cdn3.iconfinder.com/data/icons/line/36/add-512.png" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">New Product</h5>
						<p className="card-text">Creacion de nuevo producto.</p>
						<Link to='/products/newproduct' className="btn btn-primary">Go somewhere</Link>
					</div>
				</div>
			</div>
			<div className='col-sm-4'>
				<div className="card" style={{width: '13rem'}}>
					<img className="card-img-top" src="https://cdn3.iconfinder.com/data/icons/line/36/add-512.png" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Edit Product</h5>
						<p className="card-text">Editar producto existente.</p>
						<Link to='/products' className="btn btn-primary">Go somewhere</Link>
					</div>
				</div>
			</div>
			<div className='col-sm-4'>
				<div className="card" style={{width: '13rem'}}>
					<img className="card-img-top" src="https://cdn3.iconfinder.com/data/icons/line/36/add-512.png" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">New Category</h5>
						<p className="card-text">Creacion de nueva categoria.</p>
						<Link to='/categories/newcategory' className="btn btn-primary">Go somewhere</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
)





