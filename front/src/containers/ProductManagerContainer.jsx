import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import ProductManager from '../components/ProductManager';
import CreateProduct from '../components/CreateProduct';

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