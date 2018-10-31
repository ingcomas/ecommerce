const Sequelize = require('sequelize');
const db = require ('../index');
const Review = require('./Review');

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
Product.hasMany(Review,{as:'Coments'})
//Un producto tiene muchos reviews y en la tabla Review se genera una columna con productId
//Se crean dos instancias getComents y setComents

module.exports=Product;
