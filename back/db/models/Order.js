//requerimos sequelize y la base de datos
const Sequelize = require ('sequelize');
const db = require ('../index');
const User = require('./User')

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

// Order.create({
//     state:'created',
//     address:'Av Cabildo 2040',
//     email:'sebacomas@gmail.com',
//     cellphone:5174183,
//     products:[1]
// })