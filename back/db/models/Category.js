const Sequelize= require ('sequelize');
const db= require ('./db');

const Category= db.define('category', {
	name : {
		type : Sequelize.STRING,
		allowNull : false
	}
});

Category.hasMany (Product, { as : 'productId' });
Product.belongsToMany (Category, { as : 'categoryId' });

module.exports= {	Category }