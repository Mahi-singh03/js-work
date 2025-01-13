const mongoose = require('mongoose');

const connect = async () => {
  try {
    const uri = 'mongodb+srv://MahiSingh:mahi2012@cluster0.ddxzk.mongodb.net/restaurants?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to the database');
  } catch (err) {
    console.error('Database connection error:', err.message);
  }
};

module.exports = connect;
