'use strict';

const express = require('express');
const router = express.Router();
const Orders = require('../db/models/Order');
module.exports = router;

router.get('/orders', function (req, res, next) {
if(req.query.state  == ''){
      Orders.findAll()
      .then(orders=>res.json(orders))
  }else{
      Orders.findAll({where:{state:req.query.state}})
      .then(orders=>res.json(orders))
  }
});
router.post('/',(req,res)=>{
    console.log(req.body);
    
    Orders.create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        address:req.body.address,
        city:req.body.city,
        province: req.body.province,
        email: req.body.email,
        cellphone: req.body.cellphone,
        products: req.body.products
    }).then(response=>{
        console.log(response)
        
        res.send(response)})
})
router.put('/update',(req,res)=>{
    Orders.update({state:req.body.estado},{where:{id:req.body.id}})
    .then(response=>res.send(response))
})


// router.get('/:artistId', function (req, res) {
//   res.json(req.artist);
// });

// router.get('/:artistId/albums', function (req, res, next) {
//   req.artist.getAlbums() // instance method, check it out in the model
//   .then(albums => res.json(albums))
//   .catch(next);
// });

// router.get('/:artistId/songs', function (req, res, next) {
//   req.artist.getSongs({
//     include: [Artist]
//   })
//   .then(songs => res.json(songs))
//   .catch(next);
// });