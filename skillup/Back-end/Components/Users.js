const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Define the generateToken method
userSchema.methods.generateToken = function () {
  const payload = { id: this._id, email: this.email, name: this.name };
  const secretKey = process.env.JWT_SECRET || "your_secret_key";
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
};

const DataModel = mongoose.models.User || mongoose.model('User', userSchema,"User");

module.exports = { DataModel };
