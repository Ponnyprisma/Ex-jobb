$(document).ready(function(){
    var audio, playbtn;
    // Function to render Artwork
    function renderArtwork () {
        setTimeout(function() {
                $('.view').hide(); 
                $('.container-loading-artwork').show(); 
            setTimeout(function() {
                $('.container-loading-artwork').hide();
                $('.art-container').show();
            }, 3000);
        }, 3000);
    }

    function showStepThree () {
        setTimeout(function() {
            $('.view').hide();  
            $('#step-three').show();   //samma  
            $('.headline-copy').fadeIn(2000);//samma
        }, 1000);
    }

    function showStepFour () {
        setTimeout(function() {
            $('#step-four').show();//samma
            $('.view').hide();//samma   
            $('.headline-copy').fadeIn(2000);//samma
        }, 1000);
    }

    function showStepFive () {
        setTimeout(function() {
            $('#step-five').show(); 
            $('.view').hide();      
            $('.headline-copy').fadeIn(2000);
        }, 1000);
    }

    function showStepThreeSad () {
            setTimeout(function() {
                $('#step-three-sad').show(); 
                $('.view').hide();      
                $('.headline-copy').fadeIn(2000);
        }, 1000);
    }

    function showStepFourSad () {
        setTimeout(function() {
                $('#step-four-sad').show(); 
                $('.view').hide();      
                $('.headline-copy').fadeIn(2000);
        }, 1000);
    }

    function showStepFiveSad () {
        setTimeout(function() {
                $('#step-five-sad').show(); 
                $('.view').hide();      
                $('.headline-copy').fadeIn(2000);
        }, 1000);
    }

    function initAudioPlayer () {
        audio = new Audio();
        audio.src = 'audio/simon_mathewson_-_13_-_Wunderkind.mp3';
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
        $('#step-two').show();
        initAudioPlayer();
    });

    //knapp 1
    $('#btn-feeling-one').on('click', function() {
        $('.container-feeling-one').show();
        $('#step-two').hide();//samma
        showStepThree ();
    });

    //knapp 2
    $('#btn-feeling-two').on('click', function() {
        $('#step-two').hide();//samma
        $('.container-feeling-two').show();
        showStepThree ();
    });
    //knapp 3
    $('#btn-feeling-three').on('click', function() {
        $('#step-three').hide();
        $('.container-feeling-three').show();
        showStepFour();
    });
    //knapp 4
    $('#btn-feeling-four').on('click', function() {
        $('#step-three').hide();
        $('.container-feeling-four').show();
        showStepFour();
    });
    //knapp 5
    $('#btn-feeling-five').on('click', function() {
        $('.container-feeling-five').show();
        $('#step-four').hide();
        showStepFive ();
    });
    //knapp 6
    $('#btn-feeling-six').on('click', function() {
        $('.container-feeling-six').show();
        $('#step-four').hide();
        showStepFive ();
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
        $('#step-two-sad').show();  
        $('#step-one').hide();
        initAudioPlayer();
    });

    //knapp ett
    $('#btn-feeling-one-sad').on('click', function() {
        $('#step-two-sad').hide();
        $('.container-feeling-one-sad').show();
        showStepThreeSad ();
    });

    //knapp två
    $('#btn-feeling-two-sad').on('click', function () {
        $('#step-two-sad').hide();
        $('.container-feeling-two-sad').show();
        showStepThreeSad ();
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