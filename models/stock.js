var mongoose = require('mongoose');

var predictionSchema = mongoose.Schema({
  predictedClosingPrice: {type: Number, required: true},
  predictedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  date: {type: Date, required: true},
  stockId: {type: mongoose.Schema.Types.ObjectId, ref: 'Stock', required: true}
})

var Prediction = mongoose.model('Prediction', predictionSchema);

//https://docs.mongodb.com/v3.2/reference/method/db.collection.aggregate/
var historicalQuoteSchema = mongoose.Schema({
  date: {type: Date, required: true},
  openingPrice:{type: Number, required: true},
  closingPrice: Number
})

var stockSchema = mongoose.Schema({
  symbol: {type: String, required: true},
  historicalQuotes: [historicalQuoteSchema]
})

var Stock = mongoose.model('Stock', stockSchema)


module.exports = {
  Stock : Stock,
  Prediction: Prediction
}
