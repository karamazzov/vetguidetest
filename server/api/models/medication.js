import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const medicationSchema = new Schema({
  brand: { type: 'String', required: true },
  manufacturer: { type: 'String', required: true},
  form: {type: 'String', required: true},
  packaging: {type: 'String', required: false},
  active_substance: [{intensity: String, name: String,  unit: String}],
  species: [{ indications: [String], name: String}],
  warnings: {type: 'String', required: false},
  undesired_reactions: {type: 'String', required: false},
  counterindications: {type: 'String', required: false},
  dateAdded: { type: 'Date', default: Date.now, required: false },
});

export default mongoose.model('Medication', medicationSchema);

