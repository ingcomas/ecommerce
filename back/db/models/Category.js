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