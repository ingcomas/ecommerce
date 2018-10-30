var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/ecommerce');

module.exports = db;