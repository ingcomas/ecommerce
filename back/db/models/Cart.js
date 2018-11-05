const Sequelize= require ('sequelize');
const db= require ('../index');
const User = require ('./User')
const Product = require ('./Product')

const Cart= db.define('cart', {
    quantity :  {
        type : Sequelize.INTEGER,
        validate: {
            min : 1
        }
    }
});
Cart.belongsTo(User);
Product.hasMany(Cart)

module.exports = Cart;