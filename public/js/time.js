function updateTime(){
  var clock = $("#clock");
  var currentTime = moment().utcOffset('-05:00');
  var startOfDay = moment("9:30am", "H:mmA").utcOffset('-05:00');
  var endOfDay = moment("11:30pm", "H:mmA").utcOffset('-05:00');

  if(currentTime > startOfDay && currentTime < endOfDay){
    //clock.show();

    clock.html(endOfDay.countdown(currentTime).toString());
  }else{
    clock.html("Guessing is Closed");
    // clock.hide();
  }
}

 setInterval(updateTime, 1000);
