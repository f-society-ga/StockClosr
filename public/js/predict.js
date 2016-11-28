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
