/*

Geolocation
Marc-Olivier Lamothe

Script to 'geofence' the content of the page to make it viewable
only in Los Angeles or Philadelphia...

Uses location services and Google Maps API...

Getting an API key for Google Maps project:
https://developers.google.com/maps/documentation/javascript/get-api-key

Documentation for geocoding:
https://developers.google.com/maps/documentation/geocoding/intro

And for reverse geocoding specifically:
https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding

*/

// We need a Google Maps API key to use Google's (reverse) geocoding
// https://developers.google.com/maps/documentation/javascript/get-api-key
// This one is mine, if you desperately want to steal it I guess you can,
// but it's really easy to sign up for your own!
var geocodeAPIKey = "AIzaSyAdowACHRvSfVV60ck8AJwkFg_i7_Vx_0c";

// This is the base URL we will query to get reverse
// geocoding data. Basically we will give it some parameters and it will
// give us back JSON data about the user's location.
var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json";


$(document).ready(function() {
  console.log("Ready.");

  // We're going to use the browser's geolocation to find out where
  // the user is (this works on mobile too!). It's absurdly simple,
  // in that you just call this one method, and it tells you where
  // the user is in terms of latitude/longitude.

  // It does require them to give permission to the page to read their
  // location data though.

  // Get user's location, call gotCoordinatesData when found...
  navigator.geolocation.getCurrentPosition(gotCoordinatesData,handleError);
});

// gotCoordinatesData (data)
//
// Called by getCurrentPosition. Data contains the user's location in
// a coords objects.
function gotCoordinatesData (data) {
  console.log("Got coordinates.");

  // Uncomment this if you want to see what the data looks like
  // in the console!
  // console.log(data);

  // Put the user's coordinates in a string, separated by a comma
  var coords = data.coords.latitude + ',' + data.coords.longitude;

  // The result type we want is a street address
  var resultType = 'street_address';

  // Construct our querying URL out the base URL and then the extra
  // parameters that make up our query, including the coordinates we're
  // checking, the result type we want, and the API key we're using
  var url = geocodeURL + '?latlng=' + coords + '&result_type=' + resultType + '&key=' + geocodeAPIKey;

  // Use getJSON to request geocoding data from Google
  $.getJSON(url, gotGeocodeData);
};

// gotGeocodeData (data)
//
// Called by getJSON when Google has responded with geocoding
// data argument contains the geocoding data
function gotGeocodeData (data) {
  console.log("Got geocoding data.");

  // Pull out the user's formatted address (a string)
  // It's often challenging to work this bit out, but you can use
  // console.log() to print out the data in the console and look at it
  // to figure out which bit you need.
  // In this case we want the formatted address.
  var resultsArray = data.results[0].address_components;

  console.log(resultsArray);

  //get the city
  var city;
 for(var i=0; i < resultsArray.length; i++){
  var types = resultsArray[i].types;
  if(types.indexOf("locality") != -1){
    city = resultsArray[i].long_name;
    console.log(city);
  }
}

 $("#pWhereYouFrom").text("Oh you're from " + city + "! Your life must be exhausted... Why don't you treat yourself a little and go to a nearby spa center? (look at your popup filter if the page is not opening)");
  window.open("https://www.google.ca/search?q=spa+" + city + "&oq=spa+montreal&aqs=chrome.0.69i59j0l5.2759j0j7&sourceid=chrome&ie=UTF-8", "_blank");
}

// handleError()
//
// Make the background colour red so we know something went wrong!
function handleError() {
  $('#divError').css({
    display:"inline"
  })
  $('#divWhereFrom').css({
    display:"none"
  })
}
