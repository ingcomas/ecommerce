import React from 'react';

export default ({ handleSubmit }) => (
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
						<label className="col-xs-2 control-label"> Imagenes </label>
						<div className="col-xs-10">
							<input placeholder='...' className="form-control" type="text" name= 'image'/>
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