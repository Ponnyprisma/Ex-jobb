
console.log('\'Allo \'Allo!');

$('body').addClass('animation');

$( document ).ready(function() {

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
     		$('.form-section').show();   
  		}, 1000);

	});

	$('#btn-feeling-eight').on('click', function() {
		$('.button-section-4').hide();
	  	$('.container-feeling-eight').show();

		 setTimeout(function() {
     		$('.container-feeling-eight').hide();
     		$('.form-section').show();   
  		}, 1000);

	});

		$('.sendform').on('click', function() {
		$('.form-section').hide();
	  	$('.container-send-form').show();

	});

});
