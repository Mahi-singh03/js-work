const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://MahiSingh:mahi2012@cluster0.ddxzk.mongodb.net/Dtatbase-for-tutorial?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Connected to the database');
  } catch (err) {
    console.error('Database connection error:', err.message);
  }
};

module.exports = connect;
