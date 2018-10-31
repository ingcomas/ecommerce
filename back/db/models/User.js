const Sequelize = require('sequelize');
const db = require('../index');
const Order = require('./Order');
const User = db.define('user', {

    first_name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },

    last_name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },

    email:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    address: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    dni: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    cellphone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    access: Sequelize.STRING

});

User.hasMany(Order);

module.exports = User;