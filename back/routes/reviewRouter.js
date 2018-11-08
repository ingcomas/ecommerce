const express = require('express');
const router = express.Router();
const Product = require('../db/models/Product')
var Review = require('../db/models/Review');
var Order = require('../db/models/Order')

router.get('/delete/:reviewId',(req,res)=>{
  console.log(req.params.reviewId,"REQ.PARAMS <===")
  Review.findOne({where:{ id:req.params.reviewId}})
  .then(review=> review.destroy())
  .then(response => res.send("borrando"))
})

router.get('/:id',(req,res)=>{
  Review.findAll({
    where:{
      productId:req.params.id
    }
  })
  .then(response => {
    res.send(response)})
})

router.post('/newReview', (req,res)=>{
  Review.create({
    title: (req.body.user) ? req.body.user.first_name +" "+ req.body.user.last_name : null,
    content:req.body.content,
    rating:req.body.rating,
    userId: (req.body.user.id) ? req.body.user.id : null
  }).then(review =>{
    Product.findOne({where: {id:req.body.prodId}})
  .then(prod=>review.setProduct(prod.id))
  .then(res.send(review))
  })
})

// User.findOne({where:{id:1}})
// .then(peo=>
// Review.findOne({where:{id: 1}})
// .then(com=>
//     com.setUser(peo.dataValues.id)
// )
// ).catch(e => console.log(e))

module.exports = router;