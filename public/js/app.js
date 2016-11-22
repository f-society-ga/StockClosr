
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
