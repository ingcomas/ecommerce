const express= require ('express');
const router= express();
const Product = require('../db/models/Product')

module.exports= router;

router.get ('/', (req,res) => {
	Product.findAll({})
	.then(response=>{
		res.send(response)
	})
})

router.post ('/newproduct', (req,res) => {
	res.send (req.body)

})