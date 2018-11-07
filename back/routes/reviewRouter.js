const express = require('express');
const router = express.Router();
const Product = require('../db/models/Product')

var Review = require('../db/models/Review');

router.get('/:id',(req,res)=>{
  console.log(req.params.id)
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
    title: req.body.title,
    content:req.body.content,
    rating:req.body.rating
  }).then(review =>{
  Product.findOne({where: {id:req.body.prodId}
  })
  .then(prod=>review.setProduct(prod.id))
  .then(res.send(review))
  })
})

module.exports = router;