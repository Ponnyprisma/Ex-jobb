
console.log('\'Allo \'Allo!');

$('body').addClass('animation');

$( document ).ready(function() {

// start sad btn flow
	$('.sad-btn').on('click', function() {
		$('#btn-feeling-one-sad').show();
		$('#btn-feeling-two-sad').show();
		$('.happy-btn').hide();
		$('.sad-btn').hide();
		$('body').addClass('sadBackground');
		$('#vertical-text-1').text("Sad Celebration").addClass('colorChangeSadVerticalText');
	});

	$('#btn-feeling-one-sad').on('click', function() {
		$('.container-feeling-one-sad').show();
		$('.button-section-1-sad').hide();
		
		  setTimeout(function() {
     		$('.container-feeling-one-sad').hide();
     		$('#btn-feeling-three-sad').show();   
     		$('#btn-feeling-four-sad').show();    
  		}, 1000);
	});


	$('#btn-feeling-two-sad').on('click', function() {
		$('.container-feeling-two-sad').show();
		$('.button-section-1-sad').hide();

		setTimeout(function() {
     		$('.container-feeling-two-sad').hide();  
     		$('#btn-feeling-three-sad').show();   
     		$('#btn-feeling-four-sad').show();   
  		}, 1000);
	});


	$('#btn-feeling-three-sad').on('click', function() {
		$('.container-feeling-three-sad').show();
		$('.button-section-2-sad').hide();

		setTimeout(function() {
			$('.container-feeling-three-sad').hide(); 
			$('#btn-feeling-five-sad').show();   
     		$('#btn-feeling-six-sad').show();   
		}, 1000);
	});

	$('#btn-feeling-four-sad').on('click', function() {
		$('.container-feeling-four-sad').show();
		$('.button-section-2-sad').hide();

		setTimeout(function() {
			$('.container-feeling-four-sad').hide();
			$('#btn-feeling-five-sad').show();   
     		$('#btn-feeling-six-sad').show(); 
		}, 1000);

	});

	$('#btn-feeling-five-sad').on('click', function() {
		$('.container-feeling-five-sad').show();
		$('.button-section-3-sad').hide();

		setTimeout(function() {
			$('.container-feeling-five-sad').hide();
			$('#btn-feeling-seven-sad').show();   
     		$('#btn-feeling-eight-sad').show(); 
		}, 1000);

	});

	$('#btn-feeling-six-sad').on('click', function() {
		$('.container-feeling-six-sad').show();
		$('.button-section-3-sad').hide();

		setTimeout(function() {
			$('.container-feeling-six-sad').hide();
			$('#btn-feeling-seven-sad').show();   
     		$('#btn-feeling-eight-sad').show(); 
		}, 1000);

	});

	$('#btn-feeling-seven-sad').on('click', function() {
		$('.container-feeling-seven-sad').show();
		$('.button-section-4-sad').hide();

		setTimeout(function() {
			$('.container-feeling-seven-sad').hide();
			$('.form-section-sad').show();   
		}, 1000);

	});

	$('#btn-feeling-eight-sad').on('click', function() {
		$('.container-feeling-eight-sad').show();
		$('.button-section-4-sad').hide();

		setTimeout(function() {
			$('.container-feeling-eight-sad').hide();
			$('.form-section-sad').show();   
		}, 1000);

	});

	$('.send-form-sad').on('click', function() {
		$('.form-section-sad').hide();
	  	$('.container-send-form-sad').show();

	});


//end sad btn flow start happy btn flow

	$('.happy-btn').on('click', function() {
		
		$('#btn-feeling-one').show();
		$('#btn-feeling-two').show();
		$('.happy-btn').hide();
		$('.sad-btn').hide();
		$('body').addClass('animation');

		$('#vertical-text-1').text("Happy Celebration").addClass('colorChangeHappyVerticalText');
	});

	$('#btn-feeling-one').on('click', function() {
		$('.container-feeling-one').show();
		$('.button-section-1').hide();
		$('.gif-section').hide();
		
		  setTimeout(function() {
     		$('.container-feeling-one').hide();
     		$('#btn-feeling-three').show();   
     		$('#btn-feeling-four').show();    
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
  		}, 1000);
	});


	$('#btn-feeling-three').on('click', function() {
		$('.button-section-2').hide();
	  	$('.container-feeling-three').show();

	  	setTimeout(function() {
     		$('.container-feeling-three').hide();  
     		$('#btn-feeling-five').show();   
     		$('#btn-feeling-six').show();   
  		}, 1000);
	});


	$('#btn-feeling-four').on('click', function() {
		$('.button-section-2').hide();
	  	$('.container-feeling-four').show();

	  	setTimeout(function() {
     		$('.container-feeling-four').hide();  
     		$('#btn-feeling-five').show();   
     		$('#btn-feeling-six').show();   
  		}, 1000);
	});


	$('#btn-feeling-five').on('click', function() {
		$('.button-section-3').hide();
	  	$('.container-feeling-five').show();

	  	setTimeout(function() {
     		$('.container-feeling-five').hide();  
     		$('#btn-feeling-seven').show();   
     		$('#btn-feeling-eight').show();   
  		}, 1000);
	});


	$('#btn-feeling-six').on('click', function() {
		$('.button-section-3').hide();
	  	$('.container-feeling-six').show();

		 setTimeout(function() {
     		$('.container-feeling-six').hide();  
     		$('#btn-feeling-seven').show();   
     		$('#btn-feeling-eight').show();   
  		}, 1000);

	});

	$('#btn-feeling-seven').on('click', function() {
		$('.button-section-4').hide();
	  	$('.container-feeling-seven').show();

		 setTimeout(function() {
     		$('.container-feeling-seven').hide(); 
     		$('.form-section-happy').show();   
  		}, 1000);

	});

	$('#btn-feeling-eight').on('click', function() {
		$('.button-section-4').hide();
	  	$('.container-feeling-eight').show();

		 setTimeout(function() {
     		$('.container-feeling-eight').hide();
     		$('.form-section-happy').show();   
  		}, 1000);

	});

	$('.sendform').on('click', function() {
		$('.form-section-happy').hide();
	  	$('.container-send-form').show();

	});

});
