
const db = require('../index');
const Sequelize = require('sequelize')
const User = require('./User')
const Product = require('./Product')

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
Review.belongsTo(Product);
Review.belongsTo(User);
module.exports = Review;
//como utilizar el modelo para colocar un review
//en un producto ya  creado
// Product.findOne({where:{id:1}})
// .then(prod=>
//   Review.findOne({where:{id: 3}})
//   .then(com=>
//     com.setProduct(prod.dataValues.id)
//   )
// ).catch(e => console.log(e))

// User.findOne({where:{id:1}})
// .then(peo=>
// Review.findOne({where:{id: 1}})
// .then(com=>
//     com.setUser(peo.dataValues.id)
// )
// ).catch(e => console.log(e))