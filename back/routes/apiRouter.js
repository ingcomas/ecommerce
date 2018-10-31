const express = require('express');
const router = express.Router();

//MODELS
var User = require('../db/models/User');

router.get('/findUser', (req, res) => {
    console.log(req.query);
});

router.post('/newUser', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => 
        !user ? 
            User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                address: req.body.address,
                dni: req.body.dni,
                cellphone: req.body.cellphone
            })
        :
            console.log('está en uso')
    );
});

module.exports = router;