import React from 'react';
import {connect} from 'react-redux'


import Products from '../components/Products';
import CreateProduct from '../components/CreateProduct';
import {listProducts, editProduct, handleEdit, productCategories, deleteProductCategory} from '../redux/actions/products-actions'
import {axiosCategories, deleteCategory,productByCategory} from '../redux/actions/categoriesActions';
import {addToCart} from '../redux/actions/CartActions'
import {isLogged} from '../redux/actions/userActions'
;


 class ProductsContainer extends React.Component{
    constructor(props){
      super(props);
      this.state={
        productsLocal:[]
    }       
			this.handleClick= this.handleClick.bind(this);
			this.removeCategory= this.removeCategory.bind(this);
    }

    componentDidMount(){
		       
           if (this.props.match.params.id) {
              this.props.productByCategory(this.props.match.params.id)
			  this.setState({productsLocal:this.props.productsByCategory})
            }
			else{ this.props.listProducts()
			 this.setState({productsLocal:this.props.products})
			}
         };
         
         componentWillReceiveProps(nextPRops){
			if (this.props.match.params.id) {
				this.props.productByCategory(this.props.match.params.id)
				this.setState({productsLocal:this.props.productsByCategory})
            } 
			else{ this.props.listProducts()
				this.setState({productsLocal:this.props.products})
			}
		
            
         };

		handleClick(e){
			e.preventDefault();
			this.props.getCategories();
			this.props.getProductCategories(e.target.id);
			this.props.editProduct(e.target.id)
			// listProducts()
		}
		handleEdit(e){
			e.preventDefault();
			this.props.handleEdit(e.target)
		}

		removeCategory(e){
			e.preventDefault();
			this.props.removeCategory(e.target.id);
		}

    render(){
        return(
				<div>
					{/* {console.log(this.props, ' selectedProduct')} */}
					{ 						
						// this.props.selectedProduct ?
						// 	<CreateProduct 
						// 		productCategories= {this.props.productCategories}
						// 		removeCategory= { this.removeCategory }
						// 		categories= { this.props.categories } 
						// 		title= { 'Product edit' } 
						// 		selectedProduct= {this.props.selectedProduct}
						// 		removeProductCategory= {this.props.removeProductCategory} 
						// 	/> : 
							<Products 
								handleClick= {this.handleClick}
								productList={this.state.productsLocal}
								addToCart={this.props.addCart}
								user={this.props.user}
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
                        productCategories : state.product.filteredCategories,
						productsByCategory: state.categories.productsByCategory,
						user: state.user,
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
				removeCategory : (catId) => {
					dispatch(deleteCategory(catId))
				},
				removeProductCategory : (catId) => {
					dispatch(deleteProductCategory(catId))
				},
                productByCategory: function(idCategory){
                    dispatch(productByCategory(idCategory))
				},
				isLogged: function(){
					dispatch(isLogged())
				}
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

