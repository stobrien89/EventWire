//Dependencies
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('../config/passport');
const config = require('../config/config');
const Users = require('../models/Users');

router.post('/signup', (req, res) => {
    if (req.body.email && req.body.password) {
        let newUser = {
            email: req.body.email,
            password: req.body.password,
            contact: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: {
                    street_address: req.body.street_address,
                    city: req.body.city,
                    state: req.body.state,
                },
                number: req.body.number
            },
            image: req.body.image
        }
        Users.findOne({email: req.body.email})
            .then(user => {
                if (!user) {
                    Users.create(newUser)
                        .then(user => {
                            if(user) {
                                var payload = {
                                    id: newUser.id //might need to add underscore
                                }
                                var token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                            } else {
                                res.sendStatus(401)
                            }
                        })
                } else {
                    res.sendStatus(401)
                }
            })
    } else {
        res.sendStatus(401)
    }
})

router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
        Users.findOne({email: req.body.email}).then(user => {
            if (user) {
                if (user.password === req.body.password) {
                    var payload = {
                        id: user.id //might need to add underscore
                    }
                    var token = jwt.encode(payload, config.jwtSecret)
                    res.json({
                        token: token
                    })
                } else {
                    res.sendStatus(401)
                }
            } else {
                res.sendStatus(401)
            }
        })
    }   else {
            res.sendStatus(401)
    }
})

router.put('/:id', (req, res) => {
    Users.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        res.json(user)
    })
})

router.delete('/:id', (req, res) => {
    Users.findByIdAndRemove(req.params.id, (err, user) => {
        res.json(user);
    })
})

module.exports = router;