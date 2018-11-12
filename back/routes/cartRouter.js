const express= require ('express');
const router= express();
const User = require('../db/models/User');
const Cart = require('../db/models/Cart');
const Product = require('../db/models/Product')

router.get('/', (req,res)=>{
    Cart.findOne({
        where : {
            userId : req.user.id
        }
    })
    .then(response=>{
        const cartBD = JSON.parse(response.cart)
       Promise.all(cartBD.map(elem=>{
           return Product.findById(elem.id)
            .then(response=>{ delete elem.id;
                 return elem.product = response;
                })    
    }))
    .then(alo=>res.send(cartBD))
})
   
})
// router.get('/:id',(req,res)=>{
//     Cart.findOne({
//         user_id : req.params.id
//     })
//     .then(response=>res.send(response))
// })
router.post('/', (req, res)=>{
    console.log(req.body)
    const cart = JSON.stringify(req.body)
    User.findById(req.user.id)
    .then(user=>{
        Cart.create({
            cart : cart,
            userId : user.id
        })
    })
})

module.exports = router;