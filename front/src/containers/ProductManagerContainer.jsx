import React, { Component } from 'react';
import ProductManager from '../components/ProductManager';

class ProductManagerContainer extends Component {
	constructor (){
		super();
	}

	render (){
		return 	(
			<div>
				<ProductManager />
			</div>
		)
	}
}

export default ProductManagerContainer;

// export default connect(mapStateToProps, mapDispatchToProps)(ProductManagerContainer);