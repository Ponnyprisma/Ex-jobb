$(document).ready(function(){
    
    var audio, playbtn;
    // FUNCTION REDER ARTWORK SAD AND HAPPY
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

    //HAPPY FUNCTION FLOW
    function showStepThreeHappy () {
        setTimeout(function() {
            $('#step-three').fadeIn(1000);
            $('.view').hide();  
        }, 6000);
    }

    function showStepFourHappy () {
        setTimeout(function() {
            $('#step-four').fadeIn(1000);
            $('.view').hide(); 
        }, 6000);
    }

    function showStepFiveHappy () {
        setTimeout(function() {
            $('#step-five').fadeIn(1000);
            $('.view').hide();      
        }, 6000);
    }

    //SAD FUNCTION FLOW
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

    //MUSIC FUNCTION
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
        $('#step-two').fadeIn(2000);
        initAudioPlayerHappy();
    });

    //knapp 1
    $('#btn-feeling-one').on('click', function() {
        $('.container-feeling-one').show();
        $('#step-two').hide();
        showStepThreeHappy();
    });

    //knapp 2
    $('#btn-feeling-two').on('click', function() {
        $('#step-two').hide();
        $('.container-feeling-two').show();
        showStepThreeHappy();
    });
    //knapp 3
    $('#btn-feeling-three').on('click', function() {
        $('#step-three').hide();
        $('.container-feeling-three').show();
        showStepFourHappy();
    });
    //knapp 4
    $('#btn-feeling-four').on('click', function() {
        $('#step-three').hide();
        $('.container-feeling-four').show();
        showStepFourHappy();
    });
    //knapp 5
    $('#btn-feeling-five').on('click', function() {
        $('.container-feeling-five').show();
        $('#step-four').hide();
        showStepFiveHappy();
    });
    //knapp 6
    $('#btn-feeling-six').on('click', function() {
        $('.container-feeling-six').show();
        $('#step-four').hide();
        showStepFiveHappy();
    });
    //knapp sju
    $('#btn-feeling-seven').on('click', function() {
        $('.container-feeling-seven').show();
        $('#step-five').hide();
        renderArtwork();
    });
    //knapp åtta
    $('#btn-feeling-eight').on('click', function() {
        $('.container-feeling-eight').show();
        $('#step-five').hide();
        renderArtwork();
    });

    //////////////////////////////////////////////START SAD FLOW/////////////////////////////////////////
    $('#sad-smiley-btn').on('click', function(){
        $('#playpausebtn').show();
        $('#step-two-sad').fadeIn(1000);
        $('#step-one').hide();
        initAudioPlayerSad();
    });

    //knapp ett
    $('#btn-feeling-one-sad').on('click', function() {
        $('#step-two-sad').hide();
        $('.container-feeling-one-sad').show();
        showStepThreeSad();
    });

    //knapp två
    $('#btn-feeling-two-sad').on('click', function () {
        $('#step-two-sad').hide();
        $('.container-feeling-two-sad').show();
        showStepThreeSad();
    });

    //knapp tre
    $('#btn-feeling-three-sad').on('click', function () {
        $('#step-three-sad').hide();
        $('.container-feeling-three-sad').show();
        showStepFourSad();
    });

    //knapp fyra
    $('#btn-feeling-four-sad').on('click', function () {
        $('#step-three-sad').hide();
        $('.container-feeling-four-sad').show();
        showStepFourSad();
    });

    //knapp fem
    $('#btn-feeling-five-sad').on('click', function () {
        $('#step-four-sad').hide();
        $('.container-feeling-five-sad').show();
        showStepFiveSad();
    });

    //knapp sex
    $('#btn-feeling-six-sad').on('click', function () {
        $('#step-four-sad').hide();
        $('.container-feeling-six-sad').show();
        showStepFiveSad();
    });

    //knapp sju
    $('#btn-feeling-seven-sad').on('click', function() {
        $('#step-five-sad').hide();
        $('.container-feeling-seven-sad').show();
        renderArtwork();
    });

    //knapp åtta
    $('#btn-feeling-eight-sad').on('click', function() {
        $('#step-five-sad').hide();
        $('.container-feeling-eight-sad').show();
       renderArtwork();
    });

    $('#try-again').on('click', function() {
        window.location.reload();
    })

});