import React from 'react';
import {Link} from 'react-router-dom';

export default ({handleSubmit}) => (
	<div className= 'container-fluid'>
		<div className="well">
			<form className="form-horizontal" onSubmit= {handleSubmit}>
				<fieldset>
					<legend>New Product</legend>
					
					<div className="form-group">
						<label className="col-xs-2 control-label"> Nombre </label>
						<div className="col-xs-10">
							<input placeholder='...' className="form-control" type="text" name= 'name'/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-xs-2 control-label"> Descripción </label>
						<div className="col-xs-10">
							<input placeholder='...' className="form-control" type="text" name= 'description'/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-xs-2 control-label"> Precio </label>
						<div className="col-xs-10">
							<input placeholder='...' className="form-control" type="text" name= 'price'/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-xs-2 control-label"> Imagenes. Separado por comas.</label>
						<div className="col-xs-10">
							<input placeholder='...' className="form-control" type="text" name= 'images'/>
						</div>
					</div>
					
					<div className="form-group">
						<div className="col-xs-10 col-xs-offset-2">
							<button type="submit" className="btn btn-success"> Create </button>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	</div>
)



			{/* // <div className='col-xs-4'>
			// 	<div className="card"   style={{width: "12rem"}}>
			// 		<img className="card-img-top" src='https://image.flaticon.com/icons/svg/40/40058.svg' alt="Card image cap" />
			// 		<div className="card-body">
			// 			<h5 className="card-title">New product</h5>
			// 			<p className="card-text">Creacion de nuevo producto</p>
			// 			<Link to="/products/single" className="btn btn-primary"><h3>Create</h3></Link>
			// 		</div>
			// 	</div>
			// </div>
			// <div className='col-xs-4'>
			// 	<div className="card"   style={{width: "12rem"}}>
			// 		<img className="card-img-top" src='https://image.flaticon.com/icons/svg/25/25304.svg' alt="Card image cap" />
			// 		<div className="card-body">
			// 			<h5 className="card-title">New category</h5>
			// 			<p className="card-text">Creacion de nueva categoria</p>
			// 			<Link to="/products/single" className="btn btn-primary"><h3>Create</h3></Link>
			// 		</div>
			// 	</div>
			// </div> */}