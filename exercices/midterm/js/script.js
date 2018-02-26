$(document).ready(function(){
    $('#pStart').click(startGame);
});

//declare variables
var points = 0;
var time = 59;

//start the game
function startGame(){
  $("#pStart").unbind("click");
  $('#intro').hide();
  $('#divInfo').show();


  //set a timer of 1 minute
  var timer = setInterval(function () {

          if(time > 0){
            if(time === 1){
            $("#pTime").html("You have " + time + " second left");
            time--;
            }
            else{
            $("#pTime").html("You have " + time + " seconds left");
            time--;
            }
          } 

          //at the end, remove everything and show the end screen
            else{
              $("#h1Title").html("The week is over.");
              $("#game").hide();
              $("#me").hide();
              $("#divInfo").hide();

              $("#end").show();
              clearInterval(timer);
              $("*").unbind("click");
              if(points > 60){
                $("#pEnd").html("You got " + points + " points. Congratulation, you passed your first exam!");
              }
              else{
                $("#pEnd").html("You got " + points + " points. It is not enough to pass the exam. Work harder for the next one!");
              }
            }
      },1000);

  //make the icons appear
  setInterval(function () {
       var randomNumberElement = 1 + Math.floor(Math.random() * 16);
       var randomNumberX = 1 + Math.floor(Math.random() * ($(window).width() - $('#element' + randomNumberElement).width()));
       var randomNumberY = 1 + Math.floor(Math.random() * ($(window).height() - $('#element' + randomNumberElement).height()));


  	while( $('#element'+randomNumberElement).hasClass('visible') ) {
  		 var randomNumberElement = 1 + Math.floor(Math.random() * 16);
  	}

    $('#element'+randomNumberElement).show().addClass('visible');
    
    $('#element'+randomNumberElement).css({
    top: randomNumberY, left: randomNumberX
    })

    setTimeout(function() {
    $('#element'+randomNumberElement).removeClass('visible');
    $('#element'+randomNumberElement).hide();
  }, 1000);

  },400)

  //on mousedown, change the points value
  $('.elements').on('mousedown',function () {
    $(this).removeClass('visible');
    $(this).hide();

    if($(this).hasClass("plusPoint")){
      if(points < 100){
        points+= 2;
        $("#pPoints").html("you have " + points + " points");
      }
    }
    else if($(this).hasClass("minusPoint")){
      if (points > 0){
        points--;
        $("#pPoints").html("you have " + points + " points");
      }
  }
  });



}




























