import React from 'react';

export default ({ categories, handleSubmit, handleClick }) => (
	<form className="form-horizontal" onSubmit= { handleSubmit }>
	{/* { categories && console.log (categories.data, ' <== cats')} */}
		<fieldset>
			<h1 style={{ color : 'white' }}>New Category</h1>
			<div className="form-group">
				<label className="col-sm-2 control-label"><h3> Nombre </h3></label>
				<div className= 'row'>
					<div className="col-sm-4">
						<input placeholder='...' className="form-control" type="text" name= 'nombre'/>
						<button className= 'btn btn-success' type= 'submit' style= {{ marginTop : '1rem' }}> Create </button>
					
					</div>

					<div className= 'col-sm-6'>
						<div className= 'row'>
							{ 
								categories && categories.data.map (cat => {
									return (
										<div className= 'col-sm-6' key= {cat.id}>
											<div className="alert alert-warning alert-dismissible fade show" role="alert">
												<strong>{ cat.name }</strong>
												<button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick= { handleClick }>
													<i id={ cat.id } className= 'fas fa-trash-alt delete-button'></i>
												</button>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
)