
$(document).ready(function () {

	var x = 0;
	var y = 0;

$('#btnGetMeme').on('click',function () {
	x = Math.floor(Math.random() * $( window ).width());
	y = Math.floor(Math.random() * $( window ).height());

	var randomNumber = 1 + Math.floor(Math.random() * 12);
    $('#element'+randomNumber).not('visible').show().addClass('visible');

    $("#element"+randomNumber).css({left: x - 100, top: y - 100});
  });




});
