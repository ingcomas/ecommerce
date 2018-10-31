const Sequelize= require ('sequelize');
const db= require ('../index');
const Product = require ('./Product');

const Category= db.define('category', {
	name : {
		type : Sequelize.STRING,
		allowNull : false
	}
});

Category.belongsToMany(Product, {through:'productoCategoria'});
Product.belongsToMany(Category, {through:'productoCategoria'});

module.exports = Category;
// Product.findOne({where:{id:1}})
// .then(prod=>
// Category.findOne({where:{id: 1}})
// .then(cat=>
// 	cat.addProduct(prod)
// )
// ).catch(e => console.log(e))
