import User from '../models/user';
import jwt from 'express-jwt';
import passport from 'passport';
import { Router } from 'express';
let auth = jwt({secret: 'ilovemybroxyploxydoxyjoxypeksivelebitmiki', userProperty: 'payload'});

const router = new Router();


router.route('/auth/login').post((req, res, next) =>{
    if(!req.body.username || !req.body.password){
        return res.status(400).json({message: 'Please fill out all fields'});
    }

    passport.authenticate('local', (err, user, info) => {
        if(err){ return next(err); }

        if(user){
            return res.json({token: agency.generateJWT()});
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
});


export default router;
 