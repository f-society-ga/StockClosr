var mongoose = require('mongoose');

var env = require('./environment');

var dbUri = env.MONGOLAB_URI ||
        'mongodb://localhost/' + env.SAFE_TITLE;
        console.log(dbUri);
if(!env.MONGOLAB_URI) {
  require('net').connect(27017, 'localhost').on('err', function() {
    console.log("You must bow.")
    process.exit(0);
  })
}

mongoose.connect(dbUri);

module.exports = mongoose;
