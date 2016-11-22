var mongoose = require('mongoose');
// Use different database URIs based on whether an env var exists.
//process.env.LOCAL_DB is in the .env file look for key, if we have heroku it will look for MONGODB_URI
var dbUri = process.env.MONGODB_URI ||
            'mongodb://localhost/' + process.env.DATABASE_URL;

if (!process.env.MONGODB_URI) {
  // check that MongoD is running...
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
    process.exit(0);
  });
}

mongoose.connect(dbUri);

module.exports = mongoose;
