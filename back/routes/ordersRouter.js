 'use strict';

const {api_key} = require('../config/mailing');
const {DOMAIN} = require('../config/mailing');
const express = require('express');
const router = express.Router();
const Orders = require('../db/models/Order');
var Mailgun = require("mailgun-js");

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
    console.log(req.body.orden);
    var aux=req.body.orden
    var valores = { title : aux.email};
    var html = renderer.render('template.ect', valores);
    
    var data = {
        from: 'delivery_administrator@ecommerce.com.ar',
        to: `${aux.email}`,
        subject: `Orden de compra N°:${aux.id}`,
        text: `El estado de tu orden de compra es: ${aux.state}!`,
        // html: html,
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
    .then(()=>{ 
        Orders.findOne( { where:{ id:req.body.id } } )
        .then( (response)=>
        res.send(response.dataValues) )
    })
})

