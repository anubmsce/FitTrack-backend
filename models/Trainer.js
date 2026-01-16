const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  trainer: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: String
}, { timestamps: true });

module.exports = mongoose.model('Trainer', trainerSchema);
