'use strict';

const express = require('express');
const router = express.Router();
const Orders = require('../db/models/Order');
var Mailgun = require("mailgun-js");
var api_key = 'cc232683ed052d4c1474da943d2ec587-4412457b-9ea7a60f';
var DOMAIN = 'sandbox5d1f6ce9fe404828962c65ccb6c0e873.mailgun.org';
var mailgun = new Mailgun({apiKey: api_key, domain: DOMAIN});


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

var ECT = require('ect');
var renderer = ECT({ root : __dirname + '/../views' });

router.post('/email',(req,res)=>{
    console.log(req.body.orden.email);
    var valores = { title : req.body.orden.email};
    var html = renderer.render('template.ect', valores);
    
    var data = {
        from: 'delivery_administrator@ecommerce.com.ar',
        to: `${req.body.orden.email}`,
        subject: 'New delivery',
        text: 'Tu producto está en camino!',
        html: html,
      };
      
      mailgun.messages().send(data, function (error, body) {
        console.log(body);
      });
})
router.post('/',(req,res)=>{
     
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
        res.send(response)})
})
router.put('/update',(req,res)=>{
    Orders.update({state:req.body.estado},{where:{id:req.body.id}})
    .then(response=>res.send(response))
})

