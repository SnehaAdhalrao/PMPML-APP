const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  gender: String,
  age: Number,
  phone: { type: String, unique: true }, // Phone field added
  password: String,
});

module.exports = mongoose.model('User', userSchema);
