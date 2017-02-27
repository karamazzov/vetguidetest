var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var medicationSchema = new mongoose.Schema();
medicationSchema.add({
    address: {type: String, required: true},
    surface: {type: Number, required: true},
    price: {type: Number, required: true},
    structure: {type: String, required: true},
    floor: {type: Number, required: true},
    heating: {type: String, required: true},
    minimal_duration_of_a_rent: {type: Number, required: true}, 
    furnished: {type: Boolean, required: true},
    parking: {type: Boolean, required: true},
    cable: {type: Boolean, required: true},
    internet: {type: Boolean, required: true},
    phone: {type: Boolean, required: true},
    elevator: {type: Boolean, required: true},
    climate: {type: Boolean, required: true},
    terrace: {type: Boolean, required: true},
    pets: {type: Boolean, required: true},
    intercom: {type: Boolean, required: true},
    alarm: {type: Boolean, required: true},
    cameras: {type: Boolean, required: true},
    expenses: [{
        name: String,
        estimated_price: Number 
    }],
    owner: {
        owner_id: ObjectId,
        type_of_owner: String 
    },
    pictures: [String] 
    
});

module.exports = mongoose.model('Medication', medicationSchema, 'medications');
