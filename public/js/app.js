// var id = req.params.id
//
// $('#watchilist-search').on('submit', function(evt){
//   evt.preventDefault();
//   $.ajax({
//     type: "GET",
//     url: `http://dev.markitondemand.com/Api/v2/quote/json?symbol=${$('#ticker-request').val()}`
//   }).done(function(stock){
//     $('#current-price').innerHMTL(stock.LastPrice)
//   });
// });
//
// var currentPrice = $.ajax({
//   type: "GET",
//   url: 'http://dev.markitondemand.com/Api/v2/quote/json?symbol= ' + id + ''
// }).done(function(stock) {
//   $('#ul').append(stock.LastPrice);
// });


$(document).ready(function(){
  $.ajax({
    url: "http://dev.markitondemand.com/Api/v2/quote/json?symbol=AAPL",
    type: "GET",
    dataType: "json"
  }).done(function(stock) {
    $('#tableSymbol').html(stock.Symbol);
    $('#tableCompany').html(stock.Name);
    $('#tableOpeningPrice').html('Open: ' + stock.Open);
    $('#tableCurrent').html('Current Price: ' + stock.LastPrice);
    $('#tableHigh').html('High: ' + stock.High);
    $('#tableLow').html('Low: ' + stock.Low);
  });
});
