var url = require('url');
var request = require('request');

var stockHelper = {
  validateStockSymbol: function(symbol, callback){
    var options = {
      protocol: 'http:',
      host:'dev.markitondemand.com',
      pathname:'/Api/v2/Quote',
      query: {symbol : symbol}
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
  },
  search: function(searchTerm) {
    request({
      url: 'http://dev.markitondemand.com/Api/v2/Lookup/json', //URL to hit
      qs: {input: searchTerm}, //Query string data
      method: 'GET', //Specify the method
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
        }
    });
  }
};
module.exports = stockHelper
