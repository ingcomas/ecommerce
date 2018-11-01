const express = require('express');
const router = express.Router();
var passport = require('passport');

//MODELS
var User = require('../db/models/User');

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

router.get('/accepted', (req, res) => {
    res.send(true);
});

router.get('/rejected', (req, res) => {
    res.send(false);
});


router.post('/logged', passport.authenticate(
    'local', 
    {successRedirect: '/api/user/accepted',
     failureRedirect: '/api/user/rejected'}));

module.exports = router;