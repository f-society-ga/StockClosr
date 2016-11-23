
$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/api/me",
    dataType: "json"
  }).done(function(user){
    for(var i = 0; i < user.stocks.length; i++){
      $.ajax({
        url: 'http://dev.markitondemand.com/Api/v2/quote/json?symbol=' + user.stocks[i].stockTicker,
        type: "GET",
        dataType: "json"
      }).done(function(stock) {
        var ticker = user.stocks[i]
        $('#tbody').append('<tr><td id="remove">remove</a></td><td>'+stock.Symbol+'</td><td>'+stock.Name+'</td><td>'+stock.Open+'</td><td>'+stock.LastPrice+'</td><td>'+stock.High+'</td><td>'+stock.Low+'</td><td>prediction</td><td>comm guess</td></tr>');
      });
    }
  });



});


<<<<<<< HEAD
function deleteTicker(e){
  var ticker = user.stocks[i].stockTicker;
  $.ajax({
    type: "DELETE",
    url: "/api/users/stocks/stockTicker"
  }).done(function(data){
    ticker.remove()
    console.log(data.message)
  })
}

$("#remove")
=======

//DELETE STOCK FROM LIST

// <a href="/destroy/'+ticker+'?_method=DELETE"> // need to attach this to a button, give it id="remove"

//need "$pull" to remove the record from Mongo, function is in watch list controller already

// function deleteTicker(){
//   for (var i = 0; i < stocks.length; i++){
//   var ticker = user.stocks[i].stockTicker;
//   $('#remove').click(
//   $.ajax({
//     type: "DELETE",
//     url: "/api/users/stocks/stockTicker"
//   }).done(function(data){
//     ticker.remove()
//     console.log(data.message)
//   })
// )}
//
>>>>>>> f19e0340577deca0a8a4b58b5ceca9bc48df21a5
