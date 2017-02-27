var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var medicationSchema = new mongoose.Schema();
medicationSchema.add({
    name: {type: String, required: true},
    manufacturer:{ type: String, required: true},
    form: { type: String, required: true},
    packaging: { type: String, required: true},
    active_substances: [{ 
                            name: String, required: true,
                            quantity: Number, required: true,
                            quantity_type: String, required: true,
                            }],
    indications: [{ 
                    animal_type: String, required: true,
                    text: String, required: true,
                    keywords: [String], required: true
                }],
    warnings: { type: String, required: true},
    undesired_reactions: { type: String, required: true}
    counterindications: {type: String, required: true},
    carence: { type:Number, required: true}
    
});

module.exports = mongoose.model('Medication', medicationSchema, 'medications');
