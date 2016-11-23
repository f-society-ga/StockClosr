var mongoose = require('mongoose');

var predictionSchema = mongoose.Schema({
  closingPrice: {type: Number},
  predictedBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
})

var historySchema = mongoose.Schema({
  date: Date,
  dailyPrediction: Number,
  quantityPredicted: Number
})

var stockSchema = mongoose.Schema({
  symbol: {type: String, required: true},
  predictions: [predictionSchema],
  predictionHistory: [historySchema]
})

var Stock = mongoose.model('Stock',stockSchema)


module.exports = Stock;
