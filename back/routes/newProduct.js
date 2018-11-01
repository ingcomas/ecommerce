const express= require ('express');
const router= express();

module.exports= router;

router.get ('/api/newproduct', (req,res) => {
	res.send ('GET A newproduct')
})

router.post ('/newproduct', (req,res) => {
	res.send (req.body)

})