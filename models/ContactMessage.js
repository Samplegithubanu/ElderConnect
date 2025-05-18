const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fromName: String,
  toName: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ContactMessage', contactSchema);
