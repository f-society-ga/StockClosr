var mongoose = require('mongoose');
var stock = require('../models/stock')

// var watchlistSchema = mongoose.Schema({
//   stocks: {type: String}
// });

var userSchema = mongoose.Schema({
  name: {type: String, required: true },
  email: {type: String, required: true},
  stocks: [{'symbol': String, 'closingGuess': Number, 'lastGuess': Date}]
});
//   stocks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Stock'}]
// });

var User = mongoose.model('User', userSchema);


module.exports = User;
