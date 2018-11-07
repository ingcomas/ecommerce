import React from 'react';

export default ({ handleSubmit, categories, selectedProduct, title, handleEdit, removeCategory, removeProductCategory, productCategories }) => (
	<div className= 'container-fluid'> 
	{/* {console.log (categories, ' CATEGORIES')} */}
		<div className='row'>
			<div className='col-sm-2'></div>
			<div className='col-sm-8'>
				<div className="well">
					<form className="form-horizontal" onSubmit= {handleEdit && handleEdit || handleSubmit}>
						<fieldset>
							<h1 style={{color : 'white'}}>{title || 'New Product'}</h1>			
							<div className="form-group">
								<label className="col-xs-2 control-label"> Nombre </label>
								<div className="col-xs-10">
									<input placeholder= { selectedProduct && selectedProduct.name || '' } className="form-control" type="text" name= 'name'/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-xs-2 control-label"> Descripción </label>
								<div className="col-xs-10">
									<input placeholder= { selectedProduct && selectedProduct.description || '' } className="form-control" type="text" name= 'description'/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-xs-2 control-label"> Precio </label>
								<div className="col-xs-10">
									<input placeholder= { selectedProduct && selectedProduct.price || '' } className="form-control" type="text" name= 'price'/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-xs-2 control-label"> Stock </label>
								<div className="col-xs-10">
									<input placeholder= { selectedProduct && selectedProduct.stock || '' } className="form-control" type="text" name= 'stock'/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-xs-2 control-label"> Imagenes. Separado por comas.</label>
								<div className="col-xs-10">
									<input placeholder= { selectedProduct && selectedProduct.images || '' } className="form-control" type="text" name= 'images'/>
								</div>
							</div>

							<h3 style={{color : 'white'}}>Categorías</h3>
							<div className= 'col-sm-12'>
								<div className= 'row'>
									{ 
										productCategories && productCategories.map (cat => {
											return (
												<div className= 'col-sm-6' key= {cat.id}>
													<div className="alert alert-warning alert-dismissible fade show" role="alert">
														<strong>{ cat.name }</strong>
														<button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick= { removeCategory || removeProductCategory}>
															<i id={ cat.id } className= 'fas fa-trash-alt delete-button'></i>
														</button>
													</div>
												</div>
											)
										})
									}
								</div>
							</div>
							<div className='row'>
								{
									categories && categories.map(cat => {
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
								<div className="col-xs-10 col-xs-offset-2 text-center">
									<button type="submit" className="btn btn-success"> {selectedProduct && 'Edit Product' || 'Create Product'} </button>
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