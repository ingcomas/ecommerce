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
			this.handleSubmit= this.handleSubmit.bind(this);
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
			this.props.getCategories();
			this.props.getProductCategories(e.target.id);
			this.props.editProduct(e.target.id)
			// listProducts()
		}

		removeCategory(e){
			e.preventDefault();
			const prodId= this.props.match.params.id;
			const catId= e.target.id;
			this.props.removeCategory(prodId, catId);
		}
		
		handleSubmit(e){
			e.preventDefault();
			const prodId= this.props.match.params.id;
			const categories= [];
			if(e.target.categorias){
			for (var i=0; i<e.target.categorias.length; i++){
				e.target.categorias[i].checked == true ? categories.push (e.target.categorias[i].value) : null
					}
			}
			const fields= {
				name : e.target.name.value,
				description : e.target.description.value,
				price : e.target.price.value,
				stock : e.target.stock.value,
				images : e.target.images.value.split(','),
				categories : categories
			}
			this.props.handleSubmit(prodId, fields);
		}

    render(){
        return(
				<div>
					{ 						
						this.props.selectedProduct ?
							<CreateProduct 
								handleSubmit= {this.handleSubmit}
								productCategories= {this.props.productCategories}
								categories= { this.props.categories } 
								title= { 'Product edit' } 
								selectedProduct= {this.props.selectedProduct}
								removeCategory= {this.removeCategory} 
							/> : 
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
				removeCategory : (prodId,catId) => {
					dispatch(deleteProductCategory(prodId,catId))
				},
				productByCategory: function(idCategory){
					dispatch(productByCategory(idCategory))
				},
                productByCategory: function(idCategory){
                    dispatch(productByCategory(idCategory))
				},
				isLogged: function(){
					dispatch(isLogged())
				},		
				handleSubmit : (prodId,fields) => {
					dispatch(submitEditedProduct(prodId,fields))
				}
			}

			};
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

