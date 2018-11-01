const express= require ('express');
const router= express();
const Product= require ('../db/models/Product');

module.exports= router;


router.post ('/newproduct', (req,res) => {
	Product.create (req.body)
		.then (producto => res.send(producto))
})

router.get ('/newproduct', (req,res) => {
	res.send ('GET A newproduct')
})