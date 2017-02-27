var mongoose = require('mongoose');
var User = require('../models/user');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}


module.exports.usersReadAll = function(req, res) {
    User.find({})
    .exec(function(err, users) {
        if(!users) {
            sendJsonResponse(res, 404, {"message":"users not found"});
            return;
        } else if(err) {
            sendJsonResponse(res, 404, err);
            return;
        }
        sendJsonResponse(res, 200, users);
    })
}

module.exports.usersReadOne = function(req, res) {
    if(req.params && req.params.userid) {
        User.findById(req.params.userid)
        .exec(function(err, user) {
            if(!user) {
                sendJsonResponse(res, 404, {"message":"user not found"});
                return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
                return;
            } 
            sendJsonResponse(res, 200, user);
        })
    }
    else {
        sendJsonResponse(res, 404, {"message": "No user id in request"});
    }  
}

module.exports.usersCreateOne = function(req, res) {

    if(req.body) {
        var post = new User({
            username: req.body.username,
            password: req.body.password, // proveriti kakva sifra ide ovde, da li je hashovana ili ne
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            apartments: []
        });
        post.save(function (err) {
            if (err) {
                sendJsonResponse(res, 404, err);
                return;
            }
            else {
                sendJsonResponse(res, 200, post);
            }
        });
    }
    else {
		res.render('error')
        sendJsonResponse(res, 404, {"message":"body doesn't exist"})
    }
}

module.exports.usersDeleteOne = function(req, res) {
    var userid = req.params.userid;

    if(req.params && userid) {
        User.findById(userid)
        .exec(function(err, user) {
            if(err) {
                sendJsonResponse(res, 404, {"message":"userid not found"});
                return;
            }
            else {
                user.remove(function(err) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    else {
                        sendJsonResponse(res, 200, {"message":"user deleted " + user});
                    }
                });
            }
        });
    }
}

module.exports.usersUpdateOne = function(req, res) {
    var userid = req.params.userid;

    if(req.params && userid) {
        User.findById(userid)
        .exec(function(err,user) {
            if(err) {
                sendJsonResponse(res, 404, err);
                return;
            }
            if(!user) {
                sendJsonResponse(res, 404, {
                    "message" : "userid not found"
                });
            } 
            else {
                if(req.body.username)
                    user.username = req.body.username;
                if(req.body.password)
                    user.password = req.body.password; // proveriti kakva sifra ide ovde, da li je hashovana ili ne
                if(req.body.email)
                    user.email = req.body.email;
                if(req.body.phone)
                    user.phone = req.body.phone;
                if(req.body.address)
                    user.address = req.body.address;
                user.save(function(err, user) {
                    if(err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    else {
                        sendJsonResponse(res, 200, user);
                    }
                });
            }
        });
    }
}
