var request = require('request');
var url = require('url');
var stockHelper = {
  validateStockSymbol: function(symbol, callback){
    var options = {
      protocol: 'http:',
      host:'dev.markitondemand.com',
      pathname:'/MODApis/Api/v2/Lookup/json',
      query: {input : symbol}
    }
//http://dev.markitondemand.com/Api/v2/quote/json?symbol=AAPL

    var queryUrl = url.format(options);
    console.log(queryUrl)
    request(queryUrl, function(err, response, body){
      var stocks = JSON.parse(body);
      if (stocks.length > 0 && stocks[0].Symbol == symbol){
        var firstResult = stocks[0];
        callback(null, firstResult)
      }
      else {
        callback(true)
      }
    })
  }
};
module.exports = stockHelper
