var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;




var userSchema = new mongoose.Schema();
userSchema.add({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    address: {type: String, required: true},
    apartments: [ObjectId]
});


module.exports = mongoose.model('User', userSchema, 'users');
