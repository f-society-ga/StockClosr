var mongoose = require('mongoose');

var watchlistSchema = mongoose.Schema({
  symbol: {type: String, required: true},
  closingGuess: {type: Number},
  lastGuess: {type: Date}
})


// var stockSchema = mongoose.Schema({
//   current: {type: Number},
//   lastClose: {type: Number},
//   open: {type: Number},
//   pastPredictions: {type: Number},
//   todaysPrediction: {type: Number}
// });

// var Stock = mongoose.model('Stock', stockSchema);

var predictionSchema = mongoose.Schema({
  closingPrice: {type: Number},
  predictedBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
})

var Prediction = mongoose.model('Prediction', predictionSchema)
var WatchList = mongoose.model('WatchList', watchlistSchema)
// module.exports = Stock;
module.exports = WatchList;
