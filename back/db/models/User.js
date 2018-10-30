const Sequelize = require('sequelize');
const db = require('../index');

const User = db.define('user', {

    id: {
        type: Sequelize.NUMBER,
        allowNull: false
    },

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
        type: Sequelize.NUMBER,
        allowNull: false
    },

    cellphone: {
        type: Sequelize.NUMBER,
        allowNull: false
    },

    orders: {
        type: Sequelize.ARRAY,
    },

    access: Sequelize.STRING

});

module.exports = User;