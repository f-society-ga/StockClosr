var mongoose = require('mongoose');


// var watchlistSchema = mongoose.Schema({
//   stocks: {type: String}
// });

var userSchema = mongoose.Schema({
  name: {type: String, required: true },
  email: {type: String, required: true},
  googleId: String,
  stocks: []
});
//   stocks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Stock'}]
// });
//  stocks: [{'symbol': String, 'closingGuess': Number, 'lastGuess': Date}]

var User = mongoose.model('User', userSchema);


module.exports = User;
