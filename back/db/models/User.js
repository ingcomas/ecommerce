const db = require('../index');
const Order = require('./Order');
const crypto = require('crypto');
const Sequelize = require('sequelize');

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
        unique: true,
        validate: {
            isEmail: true
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: {
                args: [8, 12]
            }
        }
    },

    salt : {
        type : Sequelize.STRING
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

User.passwordSalt = () => {
    return crypto.randomBytes(20).toString('hex');
}

User.prototype.passwordHash = (password, salt) => {
    return crypto.createHmac('sha1', salt).update(password).digest('hex');
}

User.hook('beforeCreate', user => {
    user.salt = User.passwordSalt();
    let { password, salt } = user;
    user.password = user.passwordHash(password,salt);
})

module.exports = User;