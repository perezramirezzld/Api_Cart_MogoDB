const mongoose = require('mongoose');

const Mongo_url = 'mongodb://127.0.0.1:27017/carcoffe';

const db = async () => {
  try {
    await mongoose.connect(Mongo_url);
    console.log('Database connected');
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
};

module.exports = db;
