console.log('\'Allo \'Allo!');

$('body').addClass('animation');


$( document ).ready(function() {

var artWorkSad = ['images/quiz.jpg', 'images/rednails.jpg', 'images/sea.jpg', 'images/winter.jpg', 'images/dust.jpg'];
var random = Math.floor(Math.random() * artWorkSad.length);

for (var i = 0; i < artWorkSad.length; i++) {
	
	document.getElementById("art-work-sad").src = artWorkSad[random];
	console.log(artWorkSad[random]);

}

var artWorkHappy = ['images/coral.jpg', 'images/feather.jpg', 'images/minimal.jpg', 'images/skulpture.jpg', 'images/purple.jpg'];
var random = Math.floor(Math.random() * artWorkHappy.length);

for (var i = 0; i < artWorkHappy.length; i++) {
	
	document.getElementById("art-work-happy").src = artWorkHappy[random];
	console.log(artWorkHappy[random]);

}

var artworkLinkHappy = document.createElement('a');
	artworkLinkHappy.className = "download-btn-happy";
	artworkLinkHappy.href = artWorkHappy[random];
	artworkLinkHappy.download = artWorkHappy[random];
	artworkLinkHappy.textContent = 'Download you artwork!';
	document.getElementById("download-btn-container-happy").appendChild(artworkLinkHappy); 

var artworkLinkSad = document.createElement('a');
	artworkLinkSad.className = "download-btn-sad";
	artworkLinkSad.href = artWorkSad[random];
	artworkLinkSad.download = artWorkSad[random];
	artworkLinkSad.textContent = 'Download your sad artwork!';
	document.getElementById("download-btn-container-sad").appendChild(artworkLinkSad); 
	

	


// start sad btn flow
	$('#sad-smiley-btn').on('click', function() {
		$('#btn-feeling-one-sad').show();
		$('#btn-feeling-two-sad').show();
		$('.feeling-copy-section-1').show();
		$('#happy-smiley-btn').hide();
		$('#sad-smiley-btn').hide();
		$('body').addClass('sadBackground');
		$('.how-do-you-feel').hide();
	});

	$('#btn-feeling-one-sad').on('click', function() {
		$('.container-feeling-one-sad').show();
		$('.button-section-1-sad').hide();

		
		  setTimeout(function() {
     		$('.container-feeling-one-sad').hide();
     		$('#btn-feeling-three-sad').show();   
     		$('#btn-feeling-four-sad').show();  
     		$('.feeling-copy-section-2').show(); 
    
  		}, 1000);
	});


	$('#btn-feeling-two-sad').on('click', function() {
		$('.container-feeling-two-sad').show();
		$('.button-section-1-sad').hide();

		setTimeout(function() {
     		$('.container-feeling-two-sad').hide();  
     		$('#btn-feeling-three-sad').show();   
     		$('#btn-feeling-four-sad').show();  
     		$('.feeling-copy-section-2').show();  
  		}, 1000);
	});

	$('#btn-feeling-three-sad').on('click', function() {
		$('.container-feeling-three-sad').show();
		$('.button-section-2-sad').hide();

		setTimeout(function() {
			$('.container-feeling-three-sad').hide(); 
			$('#btn-feeling-five-sad').show();   
     		$('#btn-feeling-six-sad').show();   
     		$('.feeling-copy-section-3').show();
		}, 1000);
	});

	$('#btn-feeling-four-sad').on('click', function() {
		$('.container-feeling-four-sad').show();
		$('.button-section-2-sad').hide();

		setTimeout(function() {
			$('.container-feeling-four-sad').hide();
			$('#btn-feeling-five-sad').show();   
     		$('#btn-feeling-six-sad').show(); 
     		$('.feeling-copy-section-3').show();
		}, 1000);

	});

	$('#btn-feeling-five-sad').on('click', function() {
		$('.container-feeling-five-sad').show();
		$('.button-section-3-sad').hide();

		setTimeout(function() {
			$('.container-feeling-five-sad').hide();
			$('#btn-feeling-seven-sad').show();   
     		$('#btn-feeling-eight-sad').show(); 
     		$('.feeling-copy-section-4').show();
		}, 1000);

	});

	$('#btn-feeling-six-sad').on('click', function() {
		$('.container-feeling-six-sad').show();
		$('.button-section-3-sad').hide();

		setTimeout(function() {
			$('.container-feeling-six-sad').hide();
			$('#btn-feeling-seven-sad').show();   
     		$('#btn-feeling-eight-sad').show(); 
     		$('.feeling-copy-section-4').show();
		}, 1000);

	});

	$('#btn-feeling-seven-sad').on('click', function() {
		$('.container-feeling-seven-sad').show();
		$('.button-section-4-sad').hide();

		setTimeout(function() {
			$('.container-feeling-seven-sad').hide()
     		$('.container-loading-artwork').show();

     		setTimeout(function() {
     			$('.container-loading-artwork').hide();
     			$('.container-feeling-seven-sad').hide();
     			$('.artwork-container-sad').show(); 
     			$('#download-btn-container-sad').show();
     		}, 3000); //loding artwork göms efter  6 sekunder och visar sedan konsverket
 	
     	}, 1000); // animationen visas i 1 sekund

	});

	$('#btn-feeling-eight-sad').on('click', function() {
		$('.container-feeling-eight-sad').show();
		$('.button-section-4-sad').hide();

		setTimeout(function() {
			$('.container-feeling-eight-sad').hide()
     		$('.container-loading-artwork').show();

     		setTimeout(function() {
     			$('.container-loading-artwork').hide();
     			$('.container-feeling-eight-sad').hide();
     			$('.artwork-container-sad').show(); 
     			$('#download-btn-container-sad').show();
     		}, 3000); //loding artwork göms efter  6 sekunder och visar sedan konsverket
 	
     	}, 1000); // animationen visas i 1 sekund


	});

//////////////////////////////end sad btn flow start happy btn flow

	$('#happy-smiley-btn').on('click', function() {
		
		$('#btn-feeling-one').show();
		$('#btn-feeling-two').show();
		$('#happy-smiley-btn').hide();
		$('#sad-smiley-btn').hide();
		$('body').addClass('happyBackground');
		$('.how-do-you-feel').hide();
		//$('#vertical-text-1').text("Happy Celebration").addClass('colorChangeHappyVerticalText');
		$('.happy-copy-section-1').show();
	});

	$('#btn-feeling-one').on('click', function() {
		$('.container-feeling-one').show();
		$('.button-section-1').hide();
		$('.gif-section').hide();
		
		  setTimeout(function() {
     		$('.container-feeling-one').hide();
     		$('#btn-feeling-three').show();   
     		$('#btn-feeling-four').show();   
     		$('.happy-copy-section-2').show();
  		}, 1000);

	});


	$('#btn-feeling-two').on('click', function() {
		$('.container-feeling-two').show();
		$('.gif-section').hide();
		$('.button-section-1').hide();

		setTimeout(function() {
     		$('.container-feeling-two').hide();  
     		$('#btn-feeling-three').show();   
     		$('#btn-feeling-four').show(); 
     		$('.happy-copy-section-2').show();  
  		}, 1000);
	});


	$('#btn-feeling-three').on('click', function() {
		$('.button-section-2').hide();
	  	$('.container-feeling-three').show();

	  	setTimeout(function() {
     		$('.container-feeling-three').hide();  
     		$('#btn-feeling-five').show();   
     		$('#btn-feeling-six').show();   
     		$('.happy-copy-section-3').show();
  		}, 1000);
	});


	$('#btn-feeling-four').on('click', function() {
		$('.button-section-2').hide();
	  	$('.container-feeling-four').show();

	  	setTimeout(function() {
     		$('.container-feeling-four').hide();  
     		$('#btn-feeling-five').show();   
     		$('#btn-feeling-six').show();  
     		$('.happy-copy-section-3').show(); 
  		}, 1000);
	});


	$('#btn-feeling-five').on('click', function() {
		$('.button-section-3').hide();
	  	$('.container-feeling-five').show();

	  	setTimeout(function() {
     		$('.container-feeling-five').hide();  
     		$('#btn-feeling-seven').show();   
     		$('#btn-feeling-eight').show();   
     		$('.happy-copy-section-4').show(); 
  		}, 1000);
	});


	$('#btn-feeling-six').on('click', function() {
		$('.button-section-3').hide();
	  	$('.container-feeling-six').show();

		 setTimeout(function() {
     		$('.container-feeling-six').hide();  
     		$('#btn-feeling-seven').show();   
     		$('#btn-feeling-eight').show();   
     		$('.happy-copy-section-4').show(); 
  		}, 1000);

	});

	$('#btn-feeling-seven').on('click', function() {
		$('.button-section-4').hide();
	  	$('.container-feeling-seven').show();

/*
gammal groll innan renderfunktionen
		 setTimeout(function() {
     		$('.container-feeling-seven').hide(); 
     		$('.artwork-container-happy').show();  
     		$('#download-btn-container-happy').show();
  		}, 1000);
*/
		setTimeout(function() {
			$('.container-feeling-seven').hide()
     		$('.container-loading-artwork').show();

     		setTimeout(function() {
     			$('.container-loading-artwork').hide();
     			$('.container-feeling-seven').hide();
     			$('.artwork-container-happy').show(); 
     			$('#download-btn-container-happy').show();
     		}, 3000); //loding artwork göms efter  6 sekunder och visar sedan konsverket
 	
     	}, 1000); // animationen visas i 1 sekund


	});

	$('#btn-feeling-eight').on('click', function() {
		$('.button-section-4').hide();
	  	$('.container-feeling-eight').show()
     		
     	setTimeout(function() {
			$('.container-feeling-eight').hide()
     		$('.container-loading-artwork').show();

     		setTimeout(function() {
     			$('.container-loading-artwork').hide();
     			$('.container-feeling-eight').hide();
     			$('.artwork-container-happy').show(); 
     			$('#download-btn-container-happy').show();
     		}, 3000); //loding artwork göms efter  6 sekunder och visar sedan konsverket
 	
     	}, 1000); // animationen visas i 1 sekund
  	});







});