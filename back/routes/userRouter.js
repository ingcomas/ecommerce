const express = require('express');
const router = express.Router();

//MODELS
var User = require('../db/models/User');

router.get('/findUser', (req, res) => {
    
});

router.get('/allUsers', (req, res) => {
    
});

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

router.post('/loginUser', (req, res) => {
    
});

module.exports = router;