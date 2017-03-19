
import User from '../models/user';

let sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

/**
 * Read all users
 * @param req
 * @param res
 * @returns void
 */

 export function usersReadAll (req, res){
    User.find({})
    .exec(( err, users)=>{
        if(!users){
            sendJsonResponse(res, 404, {"message":"users not found"});
            return;
        }
        else if(err){
            sendJsonResponse(res, 404, err);
            return;
        }
        sendJsonResponse(res, 200, users);
    });
 }

/**
 * Read a user
 * @param req
 * @param res
 * @returns void
 */

export function usersReadOne (req, res){
    if(req.params && req.params.userid){
        User.findById(req.params.userid)
        .exec((err, user)=>{
            if(!user){
                sendJsonResponse(res, 404, {"message":"user not found"});
                return;
            }
            else if (err){
                sendJsonResponse(res, 404, err);
                return;
            }
            sendJsonResponse(res, 200, user);
        });
    }
    else{
        sendJsonResponse(res, 404, {"message": "No user id in request"});
    }
    
}


/**
 * Create a user
 * @param req
 * @param res
 * @returns void
 */

export function usersCreateOne(req, res){
    if(req.body){
        var user = new User({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address
        });
        user.save((err) => {
            if(err){
                sendJsonResponse(res, 404, err);
                return;
            }else{
                sendJsonResponse(res, 200, user);
            }
        });
    }
    else {
        res.render('error');
        sendJsonResponse(res, 404, {"message": "body doesn't exist"});
    }
}


/**
 * Deleta a user
 * @param req
 * @param res
 * @returns void
 */

 export function usersDeleteOne(req, res){
    let userid = req.params.id;

    if(req.params && userid){
        User.findById(userid)
        .exec(function(err, user){
            if(err){
                sendJsonResponse(res, 404, {"message":"userid not found"});
                return;
            }
            else{
                user.remove((err)=>{
                    if(err){
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    else{
                        sendJsonResponse(res, 200, {"message": "user deleted" + user });
                    }
                });
            }
        });
    }
 }

/**
 * Update a user
 * @param req
 * @param res
 * @returns void
 */

 export function usersUpdateOne(req, res){
    let userid = req.params.userid;

    if(req.params && userid){
        User.findById(userid)
        .exec((err, user)=>{
            if(err){
                sendJsonResponse(res, 404, err);
                return;
            }
            if(!user){
                sendJsonResponse(res, 404, {
                    "message": "userid not found"
                });
            }
            else {
                if(req.body.username)
                    user.username = req.body.username;
                if(req.body.password)
                    user.password = req.body.password; // proveriti kakva sifra ide ovde, da li je hashovana ili ne
                if(req.body.email)
                    user.email = req.body.email;
                if(req.body.name)
                    user.name = req.body.name;
                if(req.body.surname)
                    user.surname = req.body.surname;
                if(req.body.phone)
                    user.phone = req.body.phone;
                if(req.body.address)
                    user.address = req.body.address;
                user.save((err, user)=>{
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

