var mongoose = require('mongoose');


var stockSchema = mongoose.Schema({
  stockTicker: {type: String},
  closePrediction: {type: String}
});

var userSchema = mongoose.Schema({
  name: {type: String, required: true },
  email: {type: String, required: true},
  googleId: String,
  stocks: [stockSchema]
});
//   stocks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Stock'}]
// });
//  stocks: [{'symbol': String, 'closingGuess': Number, 'lastGuess': Date}]

var User = mongoose.model('User', userSchema);


module.exports = User;
