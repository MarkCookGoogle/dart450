

// This script file contains the instructions for the major interactive parts of my website.
// Major interactive parts: Drag and drop (1), Location information (2), Input analysis (3).
// *The numbers on the line before are used to quickly see which chunk of code the lines are associated with.



// (2) Borrowing your Google Maps API key to use Google's (reverse) geocoding
var geocodeAPIKey = "AIzaSyAdowACHRvSfVV60ck8AJwkFg_i7_Vx_0c";

// (2) getting JSON data about the user's location.
var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json";

$(document).ready(function () {
//do this when the page is ready


//(2) When the button #buttonAfterDestDrag will be clicked, it will activate a function to get the location of the user.
$("#aResultDivEntry").click(locationSection);


// (3)**********************************
  $('#aTxtEntry').on('click',showAnswerToText); //also, if there is nothing interesting, send a link with a page on "how to be less boring"!


// (1) the next lines about #you and #divDestinationX are there to set up the drag and drop action for the section #destinationDrag.
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

//(1) This function removes the first part of the section to show the second part, which is a text related to the answer the person chose, which is a Vacation to the beach.
function handleDrop1(event,ui) {
//(1) first we remove the first part
  ui.draggable.remove();
  $(".divDestination").css({
    display: "none"
  });
  $("#zoneCharacter").css({
    display: "none"
  });
//(1) then we show the second part
  $("#sectionEnd").css('display', 'inline-block');
//(1) and we put a text that is related to the choice the person made
  $("#pConclusion").html('A vacation on a beach, great choice! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
//(1) finally, we open a window of a booking website which coincide with the preference of the person.
  window.open("http://www.signaturevacations.com/all-inclusive-beach-vacations.asp", "newwindow", "width = 400, height = 400, top=250, left = 250", "_blank");
}
//(1) This function removes the first part of the section to show the second part, which is a text related to the answer the person chose, which is a Culinary trip.
function handleDrop2(event,ui) {
//(1) first we remove the first part
  ui.draggable.remove();
  $(".divDestination").css({
    display: "none"
  });
  $("#zoneCharacter").css({
    display: "none"
  });
//(1) then we show the second part
  $("#sectionEnd").css('display', 'inline-block');
//and we put a text that is related to the choice the person made
  $("#pConclusion").html('A culinary trip eh? Yummy! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
//(1) finally, we open a window of a booking website which coincide with the preference of the person.
  window.open("https://www.lonelyplanet.com/thailand", "newwindow", "width = 400, height = 400, top=250, right = 250", "_blank");
}
//This function removes the first part of the section to show the second part, which is a text related to the answer the person chose, which is a an European tour.
function handleDrop3(event,ui) {
//(1) first we remove the first part
  ui.draggable.remove();
  $(".divDestination").css({
    display: "none"
  });
  $("#zoneCharacter").css({
    display: "none"
  });
//(1) then we show the second part
  $("#sectionEnd").css('display', 'inline-block');
//(1) and we put a text that is related to the choice the person made
  $("#pConclusion").html('Europe will always be full of surprises and rich in history! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
//(1) finally, we open a window of a booking website which coincide with the preference of the person.
  window.open("http://www.statravel.com/europe-tours.htm", "newwindow", "width = 400, height = 400, bottom=250, left = 250", "_blank");
}
//(1) This function removes the first part of the section to show the second part, which is a text related to the answer the person chose, which is a Boat cruise.
function handleDrop4(event,ui) {
//(1) first we remove the first part
  ui.draggable.remove();
  $(".divDestination").css({
    display: "none"
  });
  $("#zoneCharacter").css({
    display: "none"
  });
//(1) then we show the second part
  $("#sectionEnd").css('display', 'inline-block');
//(1) and we put a text that is related to the choice the person made
  $("#pConclusion").html('A big boat, blue water, and the sun. You do not need more than that! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
//(1) finally, we open a window of a booking website which coincide with the preference of the person.
  window.open("https://www.costcotravel.ca/Cruises", "newwindow", "width = 400, height = 400, bottom=250, right = 250", "_blank");
}
});

// (2) Acquiring the position of the user. Calling the function called gotCoordinatesData to analyse the information and give a response to the user
function locationSection() {
        navigator.geolocation.getCurrentPosition(gotCoordinatesData,handleError);
    }


// (2) This function will analyse the information and give a response to the user
function gotCoordinatesData (data) {


  // (2) Put the user's coordinates in a string, separated by a comma
  var coords = data.coords.latitude + ',' + data.coords.longitude;

  // (2) The result type we want is a street address
  var resultType = 'street_address';

  // (2) Construct our querying URL out the base URL and then the extra
  // (2) parameters that make up our query, including the coordinates we're
  // (2) checking, the result type we want, and the API key we're using
  var url = geocodeURL + '?latlng=' + coords + '&result_type=' + resultType + '&key=' + geocodeAPIKey;

  // (2) Use getJSON to request geocoding data from Google
  $.getJSON(url, gotGeocodeData);
};

// (2) gotGeocodeData (data)
// (2) Called by getJSON when Google has responded with geocoding
// (2) data argument contains the geocoding data
function gotGeocodeData (data) {

  // (2) Pull out the user's formatted address (a string)
  var resultsArray = data.results[0].address_components;

  //(2) get the city
  var city;
 for(var i=0; i < resultsArray.length; i++){
  var types = resultsArray[i].types;
  if(types.indexOf("locality") != -1){
    city = resultsArray[i].long_name;
  }
}
// (2) With the information gathered, it is now possible to use the city of the user and change the text of the #pWhereYouFrom.
 $("#pWhereYouFrom").text("Oh you're from " + city + "! Your life must be exhausted... Why don't you treat yourself a little and go to a nearby spa center? (look at your popup filter if the page is not opening)");
// (2) Opening a window of a Google search with "spa" + the city of the user... To awaken his consumer's spirit!
  window.open("https://www.google.ca/search?q=spa+" + city + "&oq=spa+montreal&aqs=chrome.0.69i59j0l5.2759j0j7&sourceid=chrome&ie=UTF-8",  "newwindow", "width = 400, height = 400, bottom=350, right = 350", "_blank");
  $("#aAfterLocation").css("display", "inline-block");
}

// (2) handleError()
//
// (2) If there is an error, this code will display an error message by showing the #divError.
function handleError() {
  $('#divError').css({
    display:"inline"
  })
  $('#divWhereFrom').css({
    display:"none"
  })
}






// (3)
var txtResultChanged = false;

// (3) Showing a text message in response to the text written, and also opening some advertising pages depending on what's in the text.
function showAnswerToText() {
  // (3) Get the input text
  var inputText = $('#txtAreaEntry').val();
  // (3) Check if there's something there that is interesting. 
  //If nothing is caught, it will display the default message I put in the html, saying the person is boring.
  //There will also be pop ups opening depending on what the message written is about.

  //here, instead of just 'money', I would like to have an array of json words related to money, 
  //and if there is something found, it does the stuff described on the next lines.
  //example: money or bitcoin or cash or etc...
  if (inputText.indexOf('money') !== -1){
    $("#pResultTxtEntry").html('you got money');
    txtResultChanged = true;
  }
  //same thing for the next categories
  if (inputText.indexOf('animal') !== -1){
    if(txtResultChanged === true){
      $("#pResultTxtEntry").after('<p>you got animals</p>');
    }
    else{ 
      $("#pResultTxtEntry").html('');
      txtResultChanged = true;
    }
  }
  if (inputText.indexOf('food') !== -1){
    if(txtResultChanged === true){
      $("#pResultTxtEntry").after('<p>you love food</p>');
    }
    else{ 
      $("#pResultTxtEntry").html('you love food');
      txtResultChanged = true;
    }
  }
  if (inputText.indexOf('videogames') !== -1 || inputText.indexOf('video games') !== -1){
    if(txtResultChanged === true){
      $("#pResultTxtEntry").after('<p>you love video games</p>');
    }
    else{ 
      $("#pResultTxtEntry").html('you love video games');
      txtResultChanged = true;
    }
  }

  if(txtResultChanged === false){
    window.open("https://www.wikihow.com/Be-a-Less-Boring-Person",  "newwindow", "width = 400, height = 400, top=300, left = 800", "_blank");
  }

}


