
//Grabs current user and iterates over stocks array.  With each stock makes request to route that leads to back-end which then makes a request to third party api.

$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/api/me",
    dataType: "json"
  }).done(function(user){
    for(var i = 0; i < user.stocks.length; i++){
      console.log('about to ajax')
      $.ajax({
        url: '/markit/search/' + user.stocks[i].stockTicker,
        type: "GET",
        dataType: "json"
      }).done(function(stockJSON) {
        var stock = JSON.parse(stockJSON)
        $('#tbody').append('<tr><td class="remove"><a id="' + stock.Symbol + '" class="button special delete" onclick="delete_stock($(this))">Remove</a></td><td><a href="/stockinfo/'+stock.Symbol+'">'+stock.Symbol+'</a><td>'+stock.Name+'</td><td>'+stock.Open+'</td><td>'+stock.LastPrice+'</td><td>'+stock.High+'</td><td>'+stock.Low+'</td><td>prediction</td><td>comm guess</td></tr>');
      });
    }
  });
});


//deletes stock from database and watchlist
function delete_stock(row){
  var tickerSymbol = row.attr('id')
  $.ajax({
    type: "DELETE",
    url: "/api/users/stocks/"+tickerSymbol
  }).done(function(data){
    row.closest('tr').remove();
  })
}

$("#enterPrediction").click(function(){
  $.ajax({
    url: "/api/me/prediction",
    method: "PATCH",
    data: {
      predictedClosingPrice: $("#predictedClosingPrice").val()
    },
    success: function(data){
      console.log(data)
    }
  }).done(function(data) {
    var $prediction = $("#predictedClosingPrice").val()
    $("#closingPrediction").replaceWith($prediction)
  })
})

$("#remove")
