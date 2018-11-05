import React from 'react';
import {Link} from 'react-router-dom';

export default ({handleSubmit, categories}) => (
	<div className= 'container-fluid'>
		<div className='row'>
			<div className='col-sm-2'></div>
			<div className='col-sm-8'>
				<div className="well">
					<form className="form-horizontal" onSubmit= {handleSubmit}>
						<fieldset>
							<h1 style={{color : 'white'}}>New Product</h1>
							
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
								<label className="col-xs-2 control-label"> Stock </label>
								<div className="col-xs-10">
									<input placeholder='...' className="form-control" type="text" name= 'stock'/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-xs-2 control-label"> Imagenes. Separado por comas.</label>
								<div className="col-xs-10">
									<input placeholder='...' className="form-control" type="text" name= 'images'/>
								</div>
							</div>

							<h3 style={{color : 'white'}}>Categorías</h3>
							<div className='row'>
								{
									categories && categories.data.map (cat => {
										return (
											<div className='col-sm-3' key= {cat.id}>
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value={cat.id} id={cat.id} name='categorias'/>
													<label className="form-check-label" htmlFor={cat.id}>
														{cat.name}
													</label>
												</div>
											</div>
										)
									})
								}
							</div>
							<hr />
							<div className="form-group">
								<div className="col-xs-10 col-xs-offset-2">
									<button type="submit" className="btn btn-success"> Create </button>
								</div>
							</div>

						</fieldset>
					</form>
				</div>
			</div>
			<div className='col-sm-2'></div>
		</div>
	</div>
)