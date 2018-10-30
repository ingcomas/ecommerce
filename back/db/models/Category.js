const Sequelize= require ('sequelize');
const db= require ('../index');
const Product = require ('./Product');

var Category= db.define('category', {
	name : {
		type : Sequelize.STRING,
		allowNull : false
	}
});

Category.belongsToMany(Product, {through:'ProductoCategoria', foreignKey: 'prodId'});
Product.belongsToMany(Category, {through:'ProductoCategoria', foreignKey: 'catId'});

module.exports = Category;