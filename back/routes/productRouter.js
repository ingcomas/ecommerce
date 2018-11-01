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
router.get ('/:id', (req,res) => {
	const id = req.params.id;
	Product.findOne({where:{id}})
	.then(prod=>res.send(prod))
	.catch(err=>res.send(err))
})
router.post ('/newproduct', (req, res) => {
	Product.create({
		name : req.body.name,
		stock : req.body.stock,
		description : req.body.description,
		price : req.body.price,
		images : req.body.images
	})
	.then(response=>res.send(response))
})