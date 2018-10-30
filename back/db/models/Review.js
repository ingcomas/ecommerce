// REVIEWS
// text
// id
// id_usuario 
// Rating num max 10
var db = require('./index');
var Sequelize = require('sequelize')
var User = require('./User')

var Review = db.define('review',{
  title:{
    type: Sequelize.STRING,
  },
  content:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  rating:{
    type: Sequelize.INTEGER,
    allowNull: false,    
    validate:{
      min: 0,
      max: 10,
    }
  }
});

Review.belongsTo(User,{as :"id_User"})