// id-idProducto-idComprador-estado-direccionEnvio-email-celular
//requerimos sequelize y la base de datos
const Sequelize = require ('sequelize');
const db = require ('../index');
const Product = require ('./Product');
const User = require ('./User');

export default Order = db.define({
    state : {
        type : Sequelize.ENUM,
        values : ['created','processing','cancelled','completed']
    },
    address : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    cellphone : {
        type : Sequelize.STRING
    }
})
Order.hasMany(Product, { as : 'productId'})
User.belongsTo(Order, { as : 'userId'})
