//requerimos sequelize y la base de datos
const Sequelize = require ('sequelize');
const db = require ('../index');

const Order = db.define('order',{
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
        type : Sequelize.INTEGER
    },
    products : {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    }
})

module.exports = Order