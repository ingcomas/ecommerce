const express = require('express');
const router = express.Router();

var Review = require('../db/models/Review');

router.get('/',(req,res)=>{
  Review.findAll({})
  .then(response => res.send(response))
})

router.post('/newReview', (req,res)=>{
  // console.log(typeof req.body.rating)
  console.log(req.body.content)
  Review.create({
    title: req.body.title,
    content:req.body.content,
    rating:req.body.rating
  }).then(response => res.send(response))
  .catch(e=>res.send(e))
})

module.exports = router;