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
    }).then(user => res.send(user))
    .catch(e => res.send(e));
});

router.post('/logged', passport.authenticate('local'), (req, res) => {
        const authenticated = req.isAuthenticated();
        if(authenticated){
            res.send({
                id:req.user.id,
                first_name: req.user.first_name,
                last_name: req.user.last_name,
                email: req.user.email,
                address: req.user.address,
                dni: req.user.dni,
                cellphone: req.user.cellphone,
                access: req.user.access
            }) 
        }
    }
);

router.post('/createAdmin', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        user.access = true;
        user.save();
        res.send(user);
    })
});

router.post('/removeAdmin', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        user.access = false;
        user.save();
        res.send(user);
    })
});

//GETS
router.get('/allUsers', (req, res) => {
    User.findAll({})
    .then(users => res.send(users));
});

router.get('/logout', (req, res) => {
    req.logout();
    res.send('Usuario deslogeado');
});


    //req.user
    //req.isAuthenticated());
    //req.logout
    //req.session.passport.user
// })
module.exports = router;
