
const db = require('../index');
const Sequelize = require('sequelize')
const User = require('./User')

const Review = db.define('review',{
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
      max: 5,
    }
  }
});
module.exports = Review;