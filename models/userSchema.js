const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Make sure to hash and salt the password
  // Add other user-related fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
