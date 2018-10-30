const Sequelize = require('sequelize');
const db = require ('./db');
const Review = require('./Review');
const User = require('./User')
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
 categories:{
     type:Sequelize.ARRAY(Sequelize.STRING),  
 },
 price:{
     type:Sequelize.FLOAT,
     allowNull: false,
 },
 images:{
    type:Sequelize.ARRAY(Sequelize.STRING),  
 },


})
Product.hasMany(Review, { as : 'reviewId'})
Product.hasMany(Category, { as : 'categoryId'})


module.exports={Product}
