
$(document).ready(function () {
//do this when the page is ready

$("#aStartQ").click(transitionIntroToColors);

});

var timeTransition = 500;

function transitionIntroToColors() {

    $("#divIntro").addClass("disappear");

    window.setTimeout( afterTimeTransition, timeTransition);

    function afterTimeTransition(){
      $("#divIntro").addClass("noDisplay");

      $("#wrapperColors").css("display", "block");
      $("#wrapperColors").addClass("appear");
   };


}
