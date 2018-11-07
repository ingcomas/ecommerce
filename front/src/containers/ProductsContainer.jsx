import React from 'react';
import {connect} from 'react-redux'


import { productByCategory} from '../redux/actions/categoriesActions'
import Products from '../components/Products';
import CreateProduct from '../components/CreateProduct';
import {listProducts, editProduct, handleEdit, productCategories, deleteProductCategory} from '../redux/actions/products-actions'
import {axiosCategories, deleteCategory} from '../redux/actions/categoriesActions';
import {addToCart} from '../redux/actions/CartActions'
;

 class ProductsContainer extends React.Component{
    constructor(props){
      super(props);
      this.state={
        productsLocal:[]
    }       
			this.handleClick= this.handleClick.bind(this);
			this.removeProductCategory= this.removeProductCategory.bind(this);
    }

    componentDidMount(){
       
       
        //    console.log(this.props.match.params.id, 'props.match')
        //    console.log(this.props, 'props.products')
        
           if (this.props.match.params.id) {
              this.props.productByCategory(this.props.match.params.id)
			  this.setState({productsLocal:this.props.productsByCategorys})
            }
			else{ this.props.listProducts()
				this.setState({productsLocal:this.props.products})
			}
         };
         
         componentWillReceiveProps(nextPRops){
            if (this.props.match.params.id){
                this.setState({
                    productsLocal: nextPRops.productsByCategory
                })
            } else {
                this.setState({
                    productsLocal: nextPRops.products
                })
            }
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
								productList={this.state.productsLocal}
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
                        productCategories : state.product.filteredCategories,
                        productsByCategory: state.categories.productsByCategory
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
				}
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

