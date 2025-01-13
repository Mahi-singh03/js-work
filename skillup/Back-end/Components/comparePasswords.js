const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
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
  const payload = { id: this._id, email: this.email };
  const secretKey = process.env.JWT_SECRET || "your_secret_key";
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
};

let DataModel;
try {
  DataModel = mongoose.model('User');
} catch (error) {
  DataModel = mongoose.model('User', userSchema);
}

module.exports = { DataModel };
