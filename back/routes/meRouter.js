const express= require ('express');
const router= express();


router.get('/', (req,res)=>{
    req.user ? res.send(req.user) : res.sendStatus(404);
})

module.exports = router;