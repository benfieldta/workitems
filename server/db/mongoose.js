const mongoose =            require('mongoose');
const initializeWorkitems = require('./initilialize/getWorkItems');

let options = {
  poolSize: 10 // Maintain up to 10 socket connections
};

module.exports = function (dbURI) {
  process.env.TESTING = false;
  mongoose.Promise = global.Promise;
  mongoose.connect(dbURI, options);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
      initializeWorkitems.getWorkitems();
      console.log('MongoDB Connected');
  });
};
