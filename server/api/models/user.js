var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var jwt = require('jsonwebtoken');



var userSchema = new mongoose.Schema();
userSchema.add({
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    address: {type: String, required: true},
    countries: [{ name: String, required: true}],
    num_of_licences: {type: Number, required: true, default: 0},
});

userSchema.methods.generateJWT = function() {

    // set expiration to 60 days
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        _id: this._id,
        username: this.username,
        type: this.type,
        exp: parseInt(exp.getTime() / 1000),
    }, 'ilovemybroxyploxydoxyjoxypeksivelebitmiki');
};

module.exports = mongoose.model('User', userSchema, 'users');
