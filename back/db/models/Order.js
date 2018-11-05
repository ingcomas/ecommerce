//requerimos sequelize y la base de datos
const Sequelize = require ('sequelize');
const db = require ('../index');
const Product = require('./Product')

const Order = db.define('order',{
    state : {
        type : Sequelize.ENUM,
        values : ['created','processing','cancelled','completed'],
        defaultValue: 'created',
    },
    first_name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },

    last_name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    address : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    province: {
        type: Sequelize.STRING,
        allowNull: false,
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

// Order.create({
//     state:'created',
//     address:'Av Cabildo 2040',
//     email:'sebacomas@gmail.com',
//     cellphone:5174183,
//     products:[1]
// })