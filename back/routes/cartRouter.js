const express= require ('express');
const router= express();
const User = require('../db/models/User');
const Cart = require('../db/models/Cart');


router.get('/:id',(req,res)=>{
    Cart.findOne({
        user_id : req.params.id
    })
    .then(response=>res.send(response))
})