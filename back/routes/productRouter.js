const express= require ('express');
const router= express();
const Product = require('../db/models/Product')
const Category= require('../db/models/Category');

module.exports= router;

router.get ('/', (req,res) => {
	Product.findAll({})
	.then(response=>{
		res.send(response)
	})
})

router.get ('/:id/categories', (req,res) => {
	const product= req.params.id;
	Product.findAll ({ where : {id:product}, include : [Category]	})
		.then(categories => {
			return res.send(categories[0].categories)
		})
})

router.get ('/:productId/:categoryId', (req,res) => {
	const product= req.params.productId;
	const category= req.params.categoryId;
	Product.findOne ({ where : {id:productId}, include : [Category] })
		.then(category => {
			console.log (category, ' CATEGORY')
		})
})

router.get ('/:id', (req,res) => {
	const id = req.params.id;
	Product.findOne({where:{id}})
	.then(prod=>res.send(prod))
	.catch(err=>res.send(err))
})
router.get ('/:name', (req,res) => {
	const name = req.params.name;
	Product.findAll({where:{name}})
	.then(prod=>res.send(prod))
	.catch(err=>res.send(err))
})
router.post ('/newproduct', (req,res) => {
	Product.create (req.body)
	.then (producto => {
		req.body.categories.map(catId => {
			Category.findOne({ where : { id : catId } })
				.then (cat => cat.addProduct(producto))
		})	
		res.send(producto)
	})
})
// router.post ('/edit/:id', (req,res) => {
// 	console.log (res.body, ' REQ.BODY')
// 	Product.update (req.body)
// 		.then (data => res.send(data))	
// })