$(document).ready(function () {
  // All our code goes in here!




  setInterval(function () {
    var randomNumber = 1 + Math.floor(Math.random() * 16);
    $('#element'+randomNumber).not('visible').show().addClass('visible');
  },400);

  $('.elements').on('click',function () {
    $(this).removeClass('visible');
    $(this).hide();
  });







});
