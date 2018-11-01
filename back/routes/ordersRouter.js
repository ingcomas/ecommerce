'use strict';

const express = require('express');
const router = express.Router();
const Orders = require('../db/models/Order');
module.exports = router;

router.get('/orders', function (req, res, next) {
    console.log('params',req.query.state);
    
  if(req.query.state  == ''){
      Orders.findAll()
      .then(orders=>res.json(orders))
  }else{
      Orders.findAll({where:{state:req.query.state}})
      .then(orders=>res.json(orders))
  }
});



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