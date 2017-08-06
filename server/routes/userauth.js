const express = require('express');
const router = express.Router();
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const API = 'https://jsonplaceholder.typicode.com';
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const config = require('../../config.js');


router.use(bodyParser.json()),
router.use(bodyParser.urlencoded({extended: true}));


mongoose.connect(config.db);


router.post('/', function(req, res){
    User.findOne({username: req.body.username}, function(err, user){
        if(err) console.error(err);
        if(user && user.password === req.body.password){
            let token = jwt.sign(user, config.secret);
            res.json({
                success: true,
                message: 'Enjoy your token',
                token: token,
                body: user
            })
        }else{
            res.json({success: false, message: 'Authentication failed'});
        }
    });

});

module.exports = router;



