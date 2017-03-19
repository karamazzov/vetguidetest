import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: 'String', required: true},
    password: {type: 'String', required: true},
    name: {type: 'String', required: true},
    surname: {type: 'String', required: true},
    email: {type: 'String', required: true},
    phone: {type: 'Number', required: true},
    address: {type: 'String', required: true},
    num_of_licences: {type: Number, required: true, default: 0},
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

userSchema.methods.generateJWT = function() {

    // set expiration to 60 days
    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        _id: this._id,
        username: this.username,
        type: this.type,
        exp: parseInt(exp.getTime() / 1000),
    }, 'ilovemybroxyploxydoxyjoxypeksivelebitmiki');
};

export default mongoose.model('User', userSchema);
