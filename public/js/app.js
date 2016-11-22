
$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/api/me"
  }).done(function(user){
    for(var i = 0; i < user.stocks.length; i++){
      $.ajax({
        url: 'http://dev.markitondemand.com/Api/v2/quote/json?symbol=' + user.stocks[i].stockTicker,
        type: "GET",
        dataType: "json"
      }).done(function(stock) {
        $('#tbody').append('<tr><td>remove</td><td>'+stock.Symbol+'</td><td>'+stock.Name+'</td><td>'+stock.Open+'</td><td>'+stock.LastPrice+'</td><td>'+stock.High+'</td><td>'+stock.Low+'</td><td>prediction</td><td>comm guess</td></tr>');
      });
    }
  });
});
