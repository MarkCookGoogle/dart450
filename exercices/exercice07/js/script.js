/**********************************************

DART 450, Winter 2018
Droppable
Marc-Olivier Lamothe

jQuery UI's droppable function exploration

**********************************************/

$(document).ready(function () {


  $('#you').draggable({
    revert: 'invalid'
  });


  $('#divDestination1').droppable({
    drop: handleDrop1,
     accept: '#you'
  });
  $('#divDestination2').droppable({
    drop: handleDrop2,
     accept: '#you'
  });
  $('#divDestination3').droppable({
    drop: handleDrop3,
     accept: '#you'
  });
  $('#divDestination4').droppable({
    drop: handleDrop4,
     accept: '#you'
  });


function handleDrop1(event,ui) {

  ui.draggable.remove();
  $("div").css({
    display: "none"
  });
  $("#sectionEnd").css('display', 'inline-block');
  $("#pConclusion").html('A vacation on a beach, great choice! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
  window.open("http://www.signaturevacations.com/all-inclusive-beach-vacations.asp", "newwindow", "width = 400, height = 400, top=250, left = 250", "_blank");
}

function handleDrop2(event,ui) {

  ui.draggable.remove();
  $("div").css({
    display: "none"
  });
  $("#sectionEnd").css('display', 'inline-block');
  $("#pConclusion").html('A culinary trip eh? Yummy! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
  window.open("https://www.lonelyplanet.com/thailand", "newwindow", "width = 400, height = 400, top=250, right = 250", "_blank");
}

function handleDrop3(event,ui) {

  ui.draggable.remove();
  $("div").css({
    display: "none"
  });
  $("#sectionEnd").css('display', 'inline-block');
  $("#pConclusion").html('Europe will always be full of surprises and rich in history! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
  window.open("http://www.statravel.com/europe-tours.htm", "newwindow", "width = 400, height = 400, bottom=250, left = 250", "_blank");
}

function handleDrop4(event,ui) {

  ui.draggable.remove();
  $("div").css({
    display: "none"
  });
  $("#sectionEnd").css('display', 'inline-block');
  $("#pConclusion").html('A big boat, blue water, and the sun. You do not need more than that! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
  window.open("https://www.costcotravel.ca/Cruises", "newwindow", "width = 400, height = 400, bottom=250, right = 250", "_blank");
}

})





