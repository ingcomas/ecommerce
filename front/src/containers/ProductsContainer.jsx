import React from 'react';
import {connect} from 'react-redux'

import Products from '../components/Products';
import CreateProduct from '../components/CreateProduct';
import {listProducts, editProduct, handleEdit, productCategories, deleteProductCategory} from '../redux/actions/products-actions'
import {axiosCategories, deleteCategory} from '../redux/actions/categoriesActions';
import {addToCart} from '../redux/actions/CartActions'

 class ProductsContainer extends React.Component{
    constructor(props){
      super(props);
			this.handleClick= this.handleClick.bind(this);
			this.removeProductCategory= this.removeProductCategory.bind(this);
    }

    componentDidMount(){
        this.props.listProducts()
    };

		handleClick(e){
			this.props.getCategories();
			this.props.getProductCategories(e.target.id);
			this.props.editProduct(e.target.id);
		}

		removeProductCategory(e){
			e.preventDefault();
			const prodId= this.props.match.params.id;
			const catId= e.target.id;
			this.props.removeProductCategory(prodId, catId);
		}

    render(){
        return(
				<div>
					{ 						
						this.props.selectedProduct ?
							<CreateProduct 
								productCategories= {this.props.productCategories}
								categories= { this.props.categories } 
								title= { 'Product edit' } 
								selectedProduct= {this.props.selectedProduct}
								removeProductCategory= {this.removeProductCategory} 
							/> : 
							<Products 
								handleClick= {this.handleClick}
								productList={this.props.products}
								addToCart={this.props.addCart}
							/>
					} 
				</div>
        )
    }
}


function mapStateToProps(state){
    return{
            products: state.product.allProducts,
						selectedProduct : state.product.product,
						categories : state.categories.categories,
						productCategories : state.product.filteredCategories
    }
};
function mapDispatchToProps(dispatch){
    return{
        listProducts: function(){
            dispatch(listProducts())
        },
        addCart : function(product){
            dispatch(addToCart(product))
        },
				editProduct : (product) => {
					dispatch(editProduct(product))
				},
				handleEdit : (product) => {
					dispatch(handleEdit(product))
				},
				getCategories : () => {
					dispatch(axiosCategories())
				},
				getProductCategories : (productId) => {
					dispatch(productCategories(productId))
				},
				removeProductCategory : (prodId, catId) => {
					dispatch(deleteProductCategory(prodId, catId))
				}

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

