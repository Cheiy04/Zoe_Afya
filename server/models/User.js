// Schema to get new user data and store existing user data

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
