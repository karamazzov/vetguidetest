var User = require('../models/user');
var express = require('express');

var jwt = require('express-jwt');
var auth = jwt({secret: 'ilovemybroxyploxydoxyjoxypeksivelebitmiki', userProperty: 'payload'});

var router = express.Router();
var passport = require('passport');

router.post('/auth/login', function(req, res, next){
    if(!req.body.username || !req.body.password){
        return res.status(400).json({message: 'Please fill out all fields'});
    }

    passport.authenticate('local', function(err, user, info){
        if(err){ return next(err); }

        if(user){
            return res.json({token: agency.generateJWT()});
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
});

module.exports = router;
