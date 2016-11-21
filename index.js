// Your code here

$(document).ready(function() {
  console.log("You are cool and the document has loaded");

  var timeNow = function(){
    fullDate = new Date (Date.now());
    return fullDate.toLocaleTimeString();
  };

  // var intervalClock = setInterval(timeNow, 1000);
  // var clockAsString = timeNow().toString();
  var incrementTime = function(){
    var time = $('<h3>' + timeNow() + '</h3>');
    $('#clock').html(time);
  };

  setInterval(function() {incrementTime();}, 1000);


});
