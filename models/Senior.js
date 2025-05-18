const mongoose = require('mongoose');

const seniorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
  interests: [String],
});

module.exports = mongoose.model('Senior', seniorSchema);
