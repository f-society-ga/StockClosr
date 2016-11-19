var mongoose = require('mongoose');

var watchlistSchema = mongoose.Schema({
  stocks: {type: String}
});

var userSchema = mongoose.Schema({
  name: {type: String, required: true },
  email: {type: String, required: true},
  stocks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Watchlist'}]
});

var user = mongoose.model('User', userSchema);


module.exports = User;
