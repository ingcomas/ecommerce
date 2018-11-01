const express= require ('express');
const router= express();
const Category = require('../db/models/Category')

module.exports= router;

router.get ('/', (req,res) => {
	Category.findAll({})
	.then(response=>{
		res.send(response)
	})
})
router.get ('/:id', (req,res) => {
	const id = req.params.id;
	Category.findOne({where:{id}})
	.then(prod=>res.send(prod))
	.catch(err=>res.send(err))
})
router.post ('/newcategory', (req, res) => {
	Category.create({
		name : req.body.name
	})
	.then(response=>res.send(response))
})
