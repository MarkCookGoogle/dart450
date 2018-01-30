$(document).ready(function(){
    $('.divImg').click(startGame);
});


	var seconds = 6;
	var dayOfTheWeek = 1;

	var clickFood1 = 0;
	var clickFood2 = 0;
	var clickFood3 = 0;
	var clickFood4 = 0;

	var overallFatness = 0;
	var fatGain = 0;

	var scale = 1;



function startGame(){
$(".divImg").unbind("click");
$("#pExplications").html("Prepare your next meal. You have " + seconds + " seconds");
seconds--;
$("#h1Title").html("Prepare a meal for day 1");


	var timer = setInterval(function () {
	        $("#pExplications").html("Prepare your next meal. You have " + seconds + " seconds");
	        seconds--;


	        if(seconds == -1){
	       		dayOfTheWeek++;
	       		console.log(fatGain);

	        	if(fatGain == 0){
	        		fatGain = 4;
	        		overallFatness+= 4;
	        	}

	        	if(fatGain == 4){
	        		scale += 0.3;
	        	}
	        	else if(fatGain == 3){
	        		scale += 0.2;
	        	}
	        	else if(fatGain == 2){
	        		scale += 0.1;
	        	}
	        		console.log(scale)

	        	$("#imgYou").css({
	        			transform: "scaleX(" + scale + ")"
	        		})

	        	if(dayOfTheWeek == 7){
	        		//faire que toutes les fonctions arrêtent,
	        		//que le h1 change pour Your week is over
	        		//faire que le p en bas dise "vous avez pris X lbs"
	        		$("#h1Title").html("The week is over.");
	        		$("#pExplications").html("You gained " + (overallFatness - 7) + " pounds!");
	        		$("#divAllImg").hide();
	        		document.getElementById("imgYou").style.marginTop = "6%";
	        		document.getElementById("h1Title").style.marginTop = "2%";
	        		clearInterval(timer);
	        		$("*").unbind("click");
	        	}

	        $("#h1Title").html("Prepare a meal for day "+ dayOfTheWeek);

			seconds = 6;
			clickFood1 = 0;
			clickFood2 = 0;
			clickFood3 = 0;
			clickFood4 = 0;
			fatGain = 0;

		$("#pClick1").html("Clicks: " + clickFood2 + "/1");
		$("#pClick2").html("Clicks: " + clickFood2 + "/10");
		$("#pClick3").html("Clicks: " + clickFood2 + "/20");
		$("#pClick4").html("Clicks: " + clickFood2 + "/30");

	        }
	    },1000);


	if(this.id == "food1"){
		clickFood1++;
		$("#pClick1").html("Clicks: " + clickFood1 + "/1");
	}

	else if(this.id == "food2"){
		clickFood2++;
		$("#pClick2").html("Clicks: " + clickFood2 + "/10");
	}

	else if(this.id == "food3"){
		clickFood3++;
		$("#pClick3").html("Clicks: " + clickFood3 + "/20");
	}

	else if(this.id == "food4"){
		clickFood4++;
		$("#pClick4").html("Clicks: " + clickFood4 + "/30");
	}

	$('.divImg').click(addPoint);
}


function addPoint(){

	if(this.id == "food1"){
		clickFood1++;
		if (clickFood1 <= 1 && clickFood2 < 10 && clickFood3 < 20 && clickFood4 < 30){
			$("#pClick1").html("Clicks: " + clickFood1 + "/1");
			if(clickFood1 == 1){
				overallFatness+=4;
				fatGain = 4;
			}
		}
	}

	else if(this.id == "food2"){
		clickFood2++;
		if (clickFood1 < 1 && clickFood2 <= 10 && clickFood3 < 20 && clickFood4 < 30){
			$("#pClick2").html("Clicks: " + clickFood2 + "/10");
			if(clickFood2 == 10){
				overallFatness+=3;
				fatGain = 3;
			}
		}
	}

	else if(this.id == "food3"){
		clickFood3++;
		if (clickFood1 < 1 && clickFood2 < 10 && clickFood3 <= 20 && clickFood4 < 30){
			$("#pClick3").html("Clicks: " + clickFood3 + "/20");
			if(clickFood3 == 20){
				overallFatness+=2;
				fatGain = 2;
			}
		}
	}

	else if(this.id == "food4"){
		clickFood4++;
		if (clickFood1 < 1 && clickFood2 < 10 && clickFood3 < 20 && clickFood4 <= 30){
			$("#pClick4").html("Clicks: " + clickFood4 + "/30");
			if(clickFood4 == 30){
				overallFatness+=1;
				fatGain = 1;
			}
		}
	}

}

