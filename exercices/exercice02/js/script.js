$(document).ready(function () {
  // All our code goes in here!


  setInterval(function () {
       var randomNumber = 1 + Math.floor(Math.random() * 16);

       if ($(".visible").length == 16) return;

  	while( $('#element'+randomNumber).hasClass('visible') ) {
  		 var randomNumber = 1 + Math.floor(Math.random() * 16);
  	}

    $('#element'+randomNumber).show().addClass('visible');
  },400);

  $('.elements').on('mousedown',function () {
    $(this).removeClass('visible');
    $(this).hide();
  });
  });




 //   setInterval(function () {

 //   	$.fn.random = function(){
 //   		console.log(this.eq(Math.floor(Math.random() * this.length)));
 //   		return this.eq(Math.floor(Math.random() * this.length));
 //   	}


 //   	$('.elements').not('.visible').random().addClass('visible')


 //  $('.elements').on('mousedown',function () {
 //    $(this).removeClass('visible');
 //    $(this).hide();
 //  });

	// });




// setInterval(function () {
// $('.elements').not('.visible').first().addClass('visible')
// console.log()
//  },400);


//   $('.elements').on('mousedown',function () {
//     $(this).removeClass('visible');
//     $(this).hide();

//   });
//   })


