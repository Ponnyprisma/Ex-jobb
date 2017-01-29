$(document).ready(function(){
    
    var audio, playbtn;
    
    // Render artwork function
    function renderArtwork () {
        setTimeout(function() {
                $('.view').hide(); 
                $('.container-loading-artwork').show();
            setTimeout(function() {
                $('.container-loading-artwork').hide();
                $('.art-container').fadeIn(1000);
            }, 4000);
        }, 6000);
    }

    // Happy function flow
    function showStepThreeHappy () {
        setTimeout(function() {
            $('#step-three-happy').fadeIn(1000);
            $('.view').hide();  
        }, 6000);
    }

    function showStepFourHappy () {
        setTimeout(function() {
            $('#step-four-happy').fadeIn(1000);
            $('.view').hide(); 
        }, 6000);
    }

    function showStepFiveHappy () {
        setTimeout(function() {
            $('#step-five-happy').fadeIn(1000);
            $('.view').hide();      
        }, 6000);
    }

    // Sad function flow
    function showStepThreeSad () {
        setTimeout(function() {
            $('#step-three-sad').fadeIn(1000);
                $('.view').hide();      
        }, 6000);
    }

    function showStepFourSad () {
        setTimeout(function() {
                $('#step-four-sad').fadeIn(1000);
                $('.view').hide();      
        }, 6000);
    }

    function showStepFiveSad () {
        setTimeout(function() {
                $('#step-five-sad').fadeIn(1000);
                $('.view').hide();      
        }, 6000);
    }

    // Music function
    function initAudioPlayerSad () {
        audio = new Audio();
        audio.src = 'audio/simon_mathewson_-_13_-_Wunderkind.mp3';
        audio.loop = true;
        audio.play();
        playbtn = document.getElementById('playpausebtn');
        playbtn.addEventListener("click", playPause);
    }

    function initAudioPlayerHappy () {
        audio = new Audio();
        audio.src = 'audio/The_Kyoto_Connection_-_01_-_Water.mp3';
        audio.loop = true;
        audio.play();
        playbtn = document.getElementById('playpausebtn');
        playbtn.addEventListener("click", playPause);

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


    //////////////////////////////////////////////START HAPPY FLOW/////////////////////////////////////////

    $('#happy-smiley-btn').on('click', function(){
        $('#playpausebtn').show();
        $('#step-one').hide();
        $('#step-two-happy').fadeIn(2000);
        initAudioPlayerHappy();
    });

    //STEP TWO Button 1 - Enthusiastic
    $('#btn-feeling-one').on('click', function() {
        $('.container-feeling-one').show();
        $('#step-two-happy').hide();
        showStepThreeHappy();
    });

    //STEP TWO Button 2 - Satisfied
    $('#btn-feeling-two').on('click', function() {
        $('#step-two-happy').hide();
        $('.container-feeling-two').show();
        showStepThreeHappy();
    });

    // STEP THREE Button 3 - Unique
    $('#btn-feeling-three').on('click', function() {
        $('#step-three-happy').hide();
        $('.container-feeling-three').show();
        showStepFourHappy();
    });

    //STEP THREE Button 4 - peaceful
    $('#btn-feeling-four').on('click', function() {
        $('#step-three-happy').hide();
        $('.container-feeling-four').show();
        showStepFourHappy();
    });

    //STEP FOUR Button 5 -Lucky 
    $('#btn-feeling-five').on('click', function() {
        $('.container-feeling-five').show();
        $('#step-four-happy').hide();
        showStepFiveHappy();
    });

    //STEP FOUR Button 6 -Free
    $('#btn-feeling-six').on('click', function() {
        $('.container-feeling-six').show();
        $('#step-four-happy').hide();
        showStepFiveHappy();
    });
    
    //STEP FIVE Button 7 - Confident
    $('#btn-feeling-seven').on('click', function() {
        $('.container-feeling-seven').show();
        $('#step-five-happy').hide();
        renderArtwork();
    });

    //STEP FIVE Button 8 - Dynamic
    $('#btn-feeling-eight').on('click', function() {
        $('.container-feeling-eight').show();
        $('#step-five-happy').hide();
        renderArtwork();
    });

    //////////////////////////////////////////////START SAD FLOW/////////////////////////////////////////
    
    // Sad smiley button
    $('#sad-smiley-btn').on('click', function(){
        $('#playpausebtn').show();
        $('#step-two-sad').fadeIn(1000);
        $('#step-one').hide();
        initAudioPlayerSad();
    });

    //STEP TWO SAD Button 1 - Empty
    $('#btn-feeling-one-sad').on('click', function() {
        $('#step-two-sad').hide();
        $('.container-feeling-one-sad').show();
        showStepThreeSad();
    });

    //STEP TWO SAD Button 2 - Depressed
    $('#btn-feeling-two-sad').on('click', function () {
        $('#step-two-sad').hide();
        $('.container-feeling-two-sad').show();
        showStepThreeSad();
    });

    //STEP three SAD Button 3 - Bad
    $('#btn-feeling-three-sad').on('click', function () {
        $('#step-three-sad').hide();
        $('.container-feeling-three-sad').show();
        showStepFourSad();
    });

    //STEP three SAD Button 4 - Paralyzed
    $('#btn-feeling-four-sad').on('click', function () {
        $('#step-three-sad').hide();
        $('.container-feeling-four-sad').show();
        showStepFourSad();
    });

    //STEP four SAD Button 5 - Anxious
    $('#btn-feeling-five-sad').on('click', function () {
        $('#step-four-sad').hide();
        $('.container-feeling-five-sad').show();
        showStepFiveSad();
    });

    //STEP four SAD Button 6 - Heartbroken
    $('#btn-feeling-six-sad').on('click', function () {
        $('#step-four-sad').hide();
        $('.container-feeling-six-sad').show();
        showStepFiveSad();
    });

    //STEP five SAD Button 7 - Panic
    $('#btn-feeling-seven-sad').on('click', function() {
        $('#step-five-sad').hide();
        $('.container-feeling-seven-sad').show();
        renderArtwork();
    });

    //STEP five SAD Button 8 - Rejected
    $('#btn-feeling-eight-sad').on('click', function() {
        $('#step-five-sad').hide();
        $('.container-feeling-eight-sad').show();
       renderArtwork();
    });

    // Reload to start page
    $('#try-again').on('click', function() {
        window.location.reload();
    })

});