const Sequelize= require ('sequelize');
const db= require ('../index');
const User = require ('./User')

const Cart= db.define('cart', {
    quantity :  {
        type : Sequelize.INTEGER,
        validate: {
            min : 1
        }
    }
});
module.exports = Cart;