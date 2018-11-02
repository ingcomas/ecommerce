const express = require('express');
const router = express.Router();
var passport = require('passport');

//MODELS
var User = require('../db/models/User');

//POSTS
router.post('/newUser', (req, res) => {
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        dni: req.body.dni,
        cellphone: req.body.cellphone
    }).then(response => res.send(response))
    .catch(e => res.send(e));
});

router.post('/logged', passport.authenticate('local'), (req, res) =>{
        const authenticated = req.isAuthenticated();
        if(authenticated){
            res.send({
                first_name: req.user.first_name,
                last_name: req.user.last_name,
                email: req.user.email,
                address: req.user.address,
                dni: req.user.dni,
                cellphone: req.user.cellphone
            }) 
        }
    }
);
    //req.user
    //req.isAuthenticated());
    //req.logout

module.exports = router;