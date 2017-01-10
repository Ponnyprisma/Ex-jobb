console.log('\'Allo \'Allo!');




$( document ).ready(function() {

	$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Positive_psychology&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
 
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('.wikitext').html($(blurb).find('p'));


 
        },
        error: function (errorMessage) {
        }
    });
});
/*
var wikiSad = ['http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Positive_psychology&callback=?','http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Sadness&callback=?'];
var randomWikiSad = Math.floor(Math.random() * wikiSad.length);


for (var i = 0; i < wikiSad.length; i++) {
	console.log(wikiSad[randomWikiSad]);
}


var enthusiastic =[];
var satisfied =[];
var unique = [];
var peacful = [];
var lucky = [];
var free = [];
var confident = [];
var dynamic = [];

var Empty =[];
var depressed =[];
var bad = [];
var paralyzed = [];
var anxious = [];
var heartbroken = [];
var panic = [];
var rejected = [];

var artWorkSad =
var artworkHappy =

function randomSad () {
	// lyssnar om en knapp är tryckt 
}

function randomHappy () {
	//lyssnar om en knapp är tryckt 
}

// plockar in variablar i en ny arry med arry push


*/

var artWorkSad = ['images/quiz.jpg', 'images/rednails.jpg', 'images/sea.jpg', 'images/winter.jpg', 'images/dust.jpg'];
var randomSad = Math.floor(Math.random() * artWorkSad.length);
console.log(artWorkSad);

for (var i = 0; i < artWorkSad.length; i++) {
	
	document.getElementById('art-work-sad').src = artWorkSad[randomSad];
	console.log(artWorkSad[randomSad]);

}

var artWorkHappy = ['images/coral.jpg', 'images/feather.jpg', 'images/minimal.jpg', 'images/skulpture.jpg', 'images/purple.jpg'];
var randomHappy = Math.floor(Math.random() * artWorkHappy.length);
console.log(artWorkHappy);


for (var i = 0; i < artWorkHappy.length; i++) {
	
	document.getElementById('art-work-happy').src = artWorkHappy[randomHappy];
	console.log(artWorkHappy[randomHappy]);

}

//ljud



var audio, playbtn, seek_bar;

function initAudioPlayerHappy () {
	audio = new Audio();
	audio.src = 'audio/The_Kyoto_Connection_-_01_-_Water.mp3';
	audio.loop = true;
	audio.play();
	playbtn = document.getElementById('playpausebtn');
	//mutebtn = document.getElementById('mutebtn');
	playbtn.addEventListener("click", playPause);
	//mutebtn.addEventListener("click", mute);

}


function initAudioPlayer () {
	audio = new Audio();
	audio.src = 'audio/simon_mathewson_-_13_-_Wunderkind.mp3';
	audio.loop = true;
	audio.play();
	playbtn = document.getElementById('playpausebtn');
	//mutebtn = document.getElementById('mutebtn');
	playbtn.addEventListener("click", playPause);
	//mutebtn.addEventListener("click", mute);

}

function playPause () {
	if (audio.paused) {
		audio.play();
		playbtn.style.background = "url(../images/pause.svg) no-repeat";
	} else {
		audio.pause();
		playbtn.style.background = "url(../images/play.svg) no-repeat";
	}
}



//skapar nerladdningslänk till de glada konstverken
var artworkLinkHappy = document.createElement('a');
	artworkLinkHappy.className = 'download-btn-happy';
	artworkLinkHappy.href = artWorkHappy[randomHappy];
	artworkLinkHappy.download = artWorkHappy[randomHappy];
	artworkLinkHappy.textContent = 'Download your happy artwork!';
	document.getElementById('download-btn-container-happy').appendChild(artworkLinkHappy); 

//Skapar nerladdningslänk till de ledsna konstverken
var artworkLinkSad = document.createElement('a');
	artworkLinkSad.className = 'download-btn-sad';
	artworkLinkSad.href = artWorkSad[randomSad];
	artworkLinkSad.download = artWorkSad[randomSad];
	artworkLinkSad.textContent = 'Download your sad artwork!';
	document.getElementById('download-btn-container-sad').appendChild(artworkLinkSad); 


//Skapar titel till de ledsna konstverken
var artworkTextSad = document.createElement('h2');
	artworkTextSad.className ='title-sad-artwork';
	document.getElementById('artworksad-text').appendChild(artworkTextSad); 

//skapar fakta till de ledsna konstverken
var artworkTextSadFacts = document.createElement('p');
	artworkTextSadFacts.className ='sad-artwork-facts';
	document.getElementById('artworksad-text').appendChild(artworkTextSadFacts);

// Skapar titel till de glada konstverken
var artworkTextHappy = document.createElement('h2');
	artworkTextHappy.className ='title-happy-artwork';
	document.getElementById('artworkhappy-text').appendChild(artworkTextHappy); 

//skapar fakta till de glada konstverken
var artworkTextHappyFacts = document.createElement('p');
	artworkTextHappyFacts.className ='happy-artwork-facts';
	document.getElementById('artworkhappy-text').appendChild(artworkTextHappyFacts);



function titleSadArtWork () {

	if (randomSad === 0 ) {
			console.log('quize är ditt konstverk');
			artworkTextSad.textContent = ' Title: Quiz';
			artworkTextSadFacts.textContent = 'quize';
		} else if (randomSad === 1) {
			artworkTextSad.textContent = 'Title: Rednails';
			artworkTextSadFacts.textContent = 'rednails';
			console.log('rednails');
		} else if (randomSad === 2) {
			artworkTextSad.textContent = 'Title: Sea';
			artworkTextSadFacts.textContent = 'sea';
			console.log('sea');
		} else if (randomSad === 3) {
			artworkTextSad.textContent = 'Title: Winter';
			artworkTextSadFacts.textContent = 'winter';
			console.log('winter');
		} else if (randomSad == 4) {
			artworkTextSad.textContent = 'Title: Dust';
			artworkTextSadFacts.textContent = 'dust';
			console.log('dust');
	}

}

function titleHappyArtWork () {

	if (randomHappy === 0 ) {
			console.log('Coral');
			artworkTextHappy.textContent = 'Title: Coral';
			artworkTextHappyFacts.textContent = 'Coral';
		} else if (randomHappy  === 1) {
			artworkTextHappy.textContent = 'Title: Feather';
			artworkTextHappyFacts.textContent = 'feather';
			console.log('feather');
		} else if (randomHappy  === 2) {
			artworkTextHappy.textContent = 'Title: Minimal';
			artworkTextHappyFacts.textContent = 'minimal';
			console.log('minimal');
		} else if (randomHappy  === 3) {
			artworkTextHappy.textContent = 'Title: Skulptue';
			artworkTextHappyFacts.textContent = 'skulpture';
			console.log('skulpture');
		} else if (randomHappy  == 4) {
			artworkTextHappy.textContent = 'Title: Purple';
			artworkTextHappyFacts.textContent = 'purple';
			console.log('purple');
	}

}



//////////////////////////////HAPPY FLOW//////////////////////////////////////////////
	
	$('#sad-smiley-btn').on('click', function() {
		$('#btn-feeling-one-sad').show();
		$('#btn-feeling-two-sad').show();
		$('.feeling-copy-section-1').fadeIn(2000);
		$('#happy-smiley-btn').hide();
		$('#sad-smiley-btn').hide();
		//$('body').addClass('sadBackground');
		//$('#vertical-text-2').css("background", "url(images/sadandhappy-sad.svg) no-repeat");  
		//$('.fly-in-text').hide();
		$('#how-do-you-feel').hide();
		$('.explanation-text').hide();
		$('#playpausebtn').show();


		$('#logo-happy-heart').mouseover(function() {
        	$('#logo-happy-heart').css("background", "url(../images/heart-sad.svg) no-repeat");  
        	
    	});

    	$('#logo-happy-heart').mouseleave(function() {
        	$('#logo-happy-heart').css("background", "url(../images/heart.svg) no-repeat");  
        	
    	});

		initAudioPlayer();
	});

	$('#logo-happy-heart').on('click', function() {
		$('.information-popup').fadeIn(1000);
	});

	$('.close-popup').on('click', function() {
		$('.information-popup').fadeOut(1000);

	});


	$('#btn-feeling-one-sad').on('click', function() {
		$('.container-feeling-one-sad').show();
		$('.button-section-1-sad').hide();

		  setTimeout(function() {
     		$('.container-feeling-one-sad').hide();
     		$('#btn-feeling-three-sad').show();   
     		$('#btn-feeling-four-sad').show();  
     		$('.feeling-copy-section-2').fadeIn(2000);
  		}, 7000);
	});


	$('#btn-feeling-two-sad').on('click', function() {
		$('.container-feeling-two-sad').show();
		$('.button-section-1-sad').hide();

		setTimeout(function() {
     		$('.container-feeling-two-sad').hide();  
     		$('#btn-feeling-three-sad').show();   
     		$('#btn-feeling-four-sad').show();  
     		$('.feeling-copy-section-2').fadeIn(2000);
  		}, 7000);
	});

	$('#btn-feeling-three-sad').on('click', function() {
		$('.container-feeling-three-sad').show();
		$('.button-section-2-sad').hide();

		setTimeout(function() {
			$('.container-feeling-three-sad').hide(); 
			$('#btn-feeling-five-sad').show();   
     		$('#btn-feeling-six-sad').show();   
     		$('.feeling-copy-section-3').fadeIn(2000);
		}, 7000);
	});

	$('#btn-feeling-four-sad').on('click', function() {
		$('.container-feeling-four-sad').show();
		$('.button-section-2-sad').hide();

		setTimeout(function() {
			$('.container-feeling-four-sad').hide();
			$('#btn-feeling-five-sad').show();   
     		$('#btn-feeling-six-sad').show(); 
     		$('.feeling-copy-section-3').fadeIn(2000);
		}, 7000);
	});

	$('#btn-feeling-five-sad').on('click', function() {
		$('.container-feeling-five-sad').show();
		$('.button-section-3-sad').hide();

		setTimeout(function() {
			$('.container-feeling-five-sad').hide();
			$('#btn-feeling-seven-sad').show();   
     		$('#btn-feeling-eight-sad').show(); 
     		$('.feeling-copy-section-4').fadeIn(2000);
		}, 7000);
	});

	$('#btn-feeling-six-sad').on('click', function() {
		$('.container-feeling-six-sad').show();
		$('.button-section-3-sad').hide();

		setTimeout(function() {
			$('.container-feeling-six-sad').hide();
			$('#btn-feeling-seven-sad').show();   
     		$('#btn-feeling-eight-sad').show(); 
     		$('.feeling-copy-section-4').fadeIn(2000);
		}, 7000);
	});

	$('#btn-feeling-seven-sad').on('click', function() {
		$('.container-feeling-seven-sad').show();
		$('.button-section-4-sad').hide();

		setTimeout(function() {
			$('.container-feeling-seven-sad').hide()
     		$('.container-loading-artwork').show();
     		//$('.text-rendering-arwork').show();

     		setTimeout(function() {
     			$('.container-loading-artwork').hide();
     			$('.container-feeling-seven-sad').hide();
     			$('#artwork-container-sad').fadeIn(3000);
     			$('#download-btn-container-sad').show();
     		}, 3000); //loding artwork göms efter  3 sekunder och visar sedan konsverket
     	}, 7000); // animationen visas i 1 sekund
     	titleSadArtWork ();
	});

	$('#btn-feeling-eight-sad').on('click', function() {
		$('.container-feeling-eight-sad').show();
		$('.button-section-4-sad').hide();

		setTimeout(function() {
			$('.container-feeling-eight-sad').hide()
     		$('.container-loading-artwork').show();
     		//$('.text-rendering-arwork').show();

     		setTimeout(function() {
     			$('.container-loading-artwork').hide();
     			$('.container-feeling-eight-sad').hide();
     			$('#artwork-container-sad').fadeIn(3000);
     			$('#download-btn-container-sad').show();
     		}, 3000); //loding artwork göms efter  3 sekunder och visar sedan konsverket
 		}, 7000); // animationen visas i 1 sekund
 		titleSadArtWork ();
	});

//////////////////////////////HAPPY FLOW//////////////////////////////////////////////




	$('#happy-smiley-btn').on('click', function() {
		
		$('#btn-feeling-one').show();
		$('#btn-feeling-two').show();
		$('#happy-smiley-btn').hide();
		$('#sad-smiley-btn').hide();
		//$('body').addClass('happyBackground');
		//$('.fly-in-text').hide();
		//$('#logo-happy-heart').css("background", "url(../images/heart-happy.svg)");  
		//$('#vertical-text-2').css("background", "url(images/sadandhappy-happy.svg) no-repeat");  
		$('#how-do-you-feel').hide();
		$('.explanation-text').hide();
		$('.happy-copy-section-1').fadeIn(2000);
		$('#playpausebtn').show();

		$('#logo-happy-heart').mouseover(function() {
        	$('#logo-happy-heart').css("background", "url(../images/heart-happy.svg)");  
    	});

    	$('#logo-happy-heart').mouseleave(function() {
        	$('#logo-happy-heart').css("background", "url(../images/heart.svg)");  
    	});

		initAudioPlayerHappy();
	});

	$('#btn-feeling-one').on('click', function() {
	
		$('.container-feeling-one').show();
		$('.button-section-1').hide();
		
		  setTimeout(function() {
     		$('.container-feeling-one').hide();
     		$('#btn-feeling-three').show();   
     		$('#btn-feeling-four').show();   
     		$('.happy-copy-section-2').fadeIn(2000);
  		}, 7000);
	});


	$('#btn-feeling-two').on('click', function() {
		$('.container-feeling-two').show();
		$('.button-section-1').hide();

		setTimeout(function() {
     		$('.container-feeling-two').hide();  
     		$('#btn-feeling-three').show();   
     		$('#btn-feeling-four').show(); 
     		$('.happy-copy-section-2').fadeIn(2000);
  		}, 7000);
	});


	$('#btn-feeling-three').on('click', function() {
		$('.button-section-2').hide();
	  	$('.container-feeling-three').show();

	  	setTimeout(function() {
     		$('.container-feeling-three').hide();  
     		$('#btn-feeling-five').show();   
     		$('#btn-feeling-six').show();   
     		$('.happy-copy-section-3').fadeIn(2000);
  		}, 7000);
	});


	$('#btn-feeling-four').on('click', function() {
		$('.button-section-2').hide();
	  	$('.container-feeling-four').show();

	  	setTimeout(function() {
     		$('.container-feeling-four').hide();  
     		$('#btn-feeling-five').show();   
     		$('#btn-feeling-six').show();  
     		$('.happy-copy-section-3').fadeIn(2000);
  		}, 7000);
	});


	$('#btn-feeling-five').on('click', function() {
		$('.button-section-3').hide();
	  	$('.container-feeling-five').show();

	  	setTimeout(function() {
     		$('.container-feeling-five').hide();  
     		$('#btn-feeling-seven').show();   
     		$('#btn-feeling-eight').show();   
     		$('.happy-copy-section-4').fadeIn(2000);
  		}, 7000);
	});


	$('#btn-feeling-six').on('click', function() {
		$('.button-section-3').hide();
	  	$('.container-feeling-six').show();

		 setTimeout(function() {
     		$('.container-feeling-six').hide();  
     		$('#btn-feeling-seven').show();   
     		$('#btn-feeling-eight').show();   
     		$('.happy-copy-section-4').fadeIn(2000);
  		}, 7000);
	});

	$('#btn-feeling-seven').on('click', function() {
		$('.button-section-4').hide();
	  	$('.container-feeling-seven').show();

		setTimeout(function() {
			$('.container-feeling-seven').hide()
     		$('.container-loading-artwork').show();

     		setTimeout(function() {
     			$('.container-loading-artwork').hide();
     			$('.container-feeling-seven').hide();
     			$('#artwork-container-happy').fadeIn(3000);
     			$('#download-btn-container-happy').show();
     		}, 3000); //loding artwork göms efter  6 sekunder och visar sedan konsverket
 	
     	}, 7000); // animationen visas i 1 sekund
     	titleHappyArtWork ();
	});

	$('#btn-feeling-eight').on('click', function() {
		$('.button-section-4').hide();
	  	$('.container-feeling-eight').show()
     		
     	setTimeout(function() {
			$('.container-feeling-eight').hide()
     		$('.container-loading-artwork').show();
     		//$('.text-rendering-arwork').show();

     		setTimeout(function() {
     			$('.container-loading-artwork').hide();
     			$('.container-feeling-eight').hide();
 				$('#artwork-container-happy').fadeIn(3000);
     			$('#download-btn-container-happy').show();
     		}, 3000); //loding artwork göms efter  6 sekunder och visar sedan konsverket
 		}, 7000); // animationen visas i 1 sekund
 		titleHappyArtWork ();
 	});


		/*
			gammal groll innan renderfunktionen
		 setTimeout(function() {
     		$('.container-feeling-seven').hide(); 
     		$('.artwork-container-happy').show();  
     		$('#download-btn-container-happy').show();
  		}, 1000);
  		$('body').addClass('animation');
		*/

		/*
	setTimeout(function(){
  		$('.fly-in-text').removeClass('hide-text');
  	}, 500);

  	/*
function mute () {
	if (audio.muted) {
		audio.muted = false;
		mutebtn.style.background = "url(../images/speaker.svg) no-repeat";
	} else {
		audio.muted = true;
		mutebtn.style.background = "url(../images/speaker_muted.svg) no-repeat";
	}

}
*/
//window.addEventListener("load", initAudioPlayer);


});