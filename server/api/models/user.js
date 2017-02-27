var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;




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


module.exports = mongoose.model('User', userSchema, 'users');
