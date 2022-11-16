const mongoose = require('mongoose');
// require('dotenv').config({ path: 'MONGO_URI' });

const MONGO_URI =
  'mongodb+srv://hanan:hanan123@cluster0.g3pkotv.mongodb.net/?retryWrites=true&w=majority';

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
};

const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
