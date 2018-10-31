const Sequelize = require('sequelize');
const db = require ('../index');
const Review = require('./Review');
const Category = require('./Category')


const Product = db.define( "product", {
 name:{
     type:Sequelize.STRING,
     allowNull: false,   
 },
 stock:{
     type:Sequelize.INTEGER
 },
 description:{
     type:Sequelize.TEXT
    },
 price:{
     type:Sequelize.FLOAT,
     allowNull: false,
 },
 images:{
    type:Sequelize.ARRAY(Sequelize.STRING),  
 }
})

module.exports=Product;
