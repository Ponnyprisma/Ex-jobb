$(document).ready(function(){

    // Changing the canvas size depend on window width
    var currentWidth = $(window).width();
    
    if(currentWidth > 768) {
        canvas.width = 400;
        canvas.height = 500;
    }

    if (currentWidth < 768) {
        canvas.width = 250;
        canvas.height = 350;
    }

    // The function gets called when the window is fully loaded
    window.onload = function() {
    
    // Get the canvas and context
    var canvas = document.getElementById("canvas"); 
    var context = canvas.getContext("2d");
    var initialized = false;
    

    // Level properties
    var level = {
        x: 150,
        y: 150,
        width: canvas.width,
        height: canvas.height
    };
    
    // Define an entity class
    var Entity = function(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };
    
    // Array of entities
    var entities = [];

    
    // Arrays 
    var images = [];
    var imagesFree = [];
    var imagesSatisfied = [];
    var imagesUnique = [];
    var imagesPeaceful = [];
    var imagesLucky = [];
    var imagesConfident = [];
    var imagesDynamic = [];

    var imagesEmpty = [];
    var imagesDepressed = [];
    var imagesBad = [];
    var imagesParalyzed = [];
    var imagesAnxious = [];
    var imagesHeartbroken = [];
    var imagesPanic = [];
    var imagesRejected = [];

    // Image loading global variables
    var loadcount = 0;
    var loadtotal = 0;
    var preloaded = false;
    
    // Load images
    function loadImages(imagefiles) {
    
    // Initialize variables
    loadtotal = imagefiles.length;

        // Load the images
    var loadedimages = [];
         for (var i=0; i<imagefiles.length; i++) {
          // Create the image object
            var image = new Image();
            
            // Add onload event handler
            image.onload = function () {
                loadcount++;
                if (loadcount == loadtotal) {
                    // Done loading
                    preloaded = true;
                }
            };
            
            // Set the source url of the image
            image.src = imagefiles[i];
            
            // Save to the image array
            loadedimages[i] = image;
        }
        
        // Return an array of images
        return loadedimages;
    }

    function emptyPic() {
        // Loadning images
        imagesEmpty = loadImages(["images/happyimages/empty1.png", "images/happyimages/empty2.png", "images/happyimages/empty3.png","images/happyimages/empty4.png", "images/happyimages/empty5.png"]);
        
        // Create random entities
       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * 4);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesEmpty[random], 0, 0, scale, scale,randRange(100, 100))
            
            // Set a random position
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }

        main(0);
    }

    function depressedPic() {

        imagesDepressed = loadImages(["images/happyimages/depressed1.png", "images/happyimages/depressed2.png", "images/happyimages/depressed3.png","images/happyimages/depressed4.png", "images/happyimages/depressed5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesDepressed.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesDepressed[random], 5, 5, scale, scale,randRange(100, 100))
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }

        main(0);
    }


    function badPic() {

        imagesBad = loadImages(["images/happyimages/bad1.png", "images/happyimages/bad2.png", "images/happyimages/bad3.png","images/happyimages/bad4.png", "images/happyimages/bad5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesBad.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesBad[random], 5, 5, scale, scale,randRange(100, 100))
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }

        main(0);
    }

    function paralyzedPic() {

        imagesParalyzed = loadImages(["images/happyimages/paralyzed1.png", "images/happyimages/paralyzed2.png", "images/happyimages/paralyzed3.png","images/happyimages/paralyzed4.png", "images/happyimages/paralyzed5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesParalyzed.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesParalyzed[random], 0, 0, scale, scale,randRange(100, 100))
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }

        main(0);
    }

    function anxiousPic() {

        imagesAnxious = loadImages(["images/happyimages/anxious1.png", "images/happyimages/anxious2.png", "images/happyimages/anxious3.png","images/happyimages/anxious4.png", "images/happyimages/anxious5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesAnxious.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesAnxious[random], 0, 0, scale, scale,randRange(100, 100))
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }

        main(0);
    }

    function heartbrokenPic() {

        imagesHeartbroken = loadImages(["images/happyimages/heartbroken1.png", "images/happyimages/heartbroken2.png", "images/happyimages/heartbroken3.png","images/happyimages/heartbroken4.png", "images/happyimages/heartbroken5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesHeartbroken.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesHeartbroken[random], 0, 0, scale, scale,randRange(100, 100))
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }

        main(0);
    }

    function panicPic() {

        imagesPanic = loadImages(["images/happyimages/panic1.png", "images/happyimages/panic2.png", "images/happyimages/panic3.png","images/happyimages/panic4.png", "images/happyimages/panic5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesPanic.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesPanic[random], 0, 0, scale, scale,randRange(100, 100))
            
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }

        main(0);
    }

    function rejectedPic() {

        imagesRejected = loadImages(["images/happyimages/rejected1.png", "images/happyimages/rejected2.png", "images/happyimages/rejected3.png","images/happyimages/rejected4.png", "images/happyimages/rejected5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesRejected.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesRejected[random], 0, 0, scale, scale,randRange(100, 100))
            
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }

        main(0);
    }


    function enthusiasticPic() {

        images = loadImages(["images/happyimages/enthusiastic1.png", "images/happyimages/enthusiastic2.png", "images/happyimages/enthusiastic3.png", "images/happyimages/enthusiastic4.png", "images/happyimages/enthusiastic5.png"]);
        
       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * images.length);
            var scale = randRange(150, 150);
            var entity = new Entity(images[random], 0, 0, scale, scale,randRange(100, 100));
            
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);
            
            entities.push(entity);
        }

        main(0);
    }

    function satisfiedPic() {

        imagesSatisfied = loadImages(["images/happyimages/satisfied1.png", "images/happyimages/satisfied2.png", "images/happyimages/satisfied3.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesFree.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesSatisfied[random], 0, 0, scale, scale,randRange(100, 100))
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }

        main(0);
    }

    function uniqePic() {

        imagesUnique = loadImages(["images/happyimages/unique1.png", "images/happyimages/unique2.png", "images/happyimages/unique3.png", "images/happyimages/unique4.png", "images/happyimages/unique5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesUnique.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesUnique[random], 0, 0, scale, scale,randRange(100, 100))
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }
        
        main(0);
    }

    function peacefulPic() {

        imagesPeaceful = loadImages(["images/happyimages/peaceful1.png", "images/happyimages/peaceful2.png", "images/happyimages/peaceful3.png", "images/happyimages/peaceful4.png", "images/happyimages/peaceful5.png", "images/happyimages/peaceful6.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesPeaceful.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesPeaceful[random], 0, 0, scale, scale,randRange(100, 100))
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }
        
        main(0);
    }


    function uniqePic() {
        
        imagesUnique = loadImages(["images/happyimages/unique1.png", "images/happyimages/unique2.png", "images/happyimages/unique3.png", "images/happyimages/unique4.png", "images/happyimages/unique5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesUnique.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesUnique[random], 0, 0, scale, scale,randRange(100, 100))
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }
        
        main(0);
    }

    function luckyPic() {

        imagesLucky = loadImages(["images/happyimages/lucky1.png", "images/happyimages/lucky2.png", "images/happyimages/lucky3.png", "images/happyimages/lucky4.png", "images/happyimages/lucky5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesLucky.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesLucky[random], 0, 0, scale, scale,randRange(100, 100))
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);

            entities.push(entity);
        }
        
        main(0);
    }

    function freePic() {

        imagesFree = loadImages(["images/happyimages/free1.png", "images/happyimages/free2.png", "images/happyimages/free3.png", "images/happyimages/free4.png", "images/happyimages/free5.png"]);
       
       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesFree.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesFree[random], 0, 0, scale, scale,randRange(100, 100));
       
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);
            entities.push(entity);
        }
    
        main(0);
    }

    function confidentPic() {

        imagesConfident = loadImages(["images/happyimages/confident1.png", "images/happyimages/confident2.png", "images/happyimages/confident3.png", "images/happyimages/confident4.png", "images/happyimages/confident5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesConfident.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesConfident[random], 0, 0, scale, scale,randRange(100, 100));
       
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);
            entities.push(entity);
        }
    
        main(0);
    }

    function dynamicPic() {

        imagesDynamic = loadImages(["images/happyimages/dynamic1.png", "images/happyimages/dynamic2.png", "images/happyimages/dynamic3.png", "images/happyimages/dynamic4.png", "images/happyimages/dynamic5.png"]);

       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesDynamic.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesDynamic[random], 0, 0, scale, scale,randRange(100, 100));
       
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);
            entities.push(entity);
        }
    
        // Enter main loop
        main(0);
    }

    // Get a random int between low and high, inclusive
    function randRange(low, high) {
        return Math.floor(low + Math.random()*(high-low+1));
    }
    
    // Main loop
    function main(tframe) {
        // Request animation frames
        window.requestAnimationFrame(main);

        if (!initialized) {
            
            // Clear the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw the frame
            drawFrame();
            
            
            if (preloaded) {
                // Add a delay for demonstration purposes
                setTimeout(function(){initialized = true;}, 1000);
            }
            } else {
            // Update and render frame
            update(tframe);
            render();
        }
    }
    
    // Update the game state
    function update(tframe) {
        // Update entities
        for (var i=0; i<entities.length; i++) {
            var entity = entities[i];

        }
    }
    
    function updateFps(dt) {
   
        fpstime += dt;
        framecount++;
    }
    
    function render() {
        
        // Draw the frame
        drawFrame();
        
        for (var i=0; i<entities.length; i++) {
            
            // Draw the entity
            var entity = entities[i];
            context.drawImage(entity.image, entity.x, entity.y, entity.width, entity.height);
        }
    }
    
    // Draw a frame with a border  
    function drawFrame() {
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#e8eaec";
    }

    // Download Canvas
    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById('canvas').toDataURL(1.0);
        link.download = filename;
    }

    document.getElementById('download').addEventListener('click', function() {
        downloadCanvas(this, 'canvas', 'artwork.png');
    }, false);


    // Call function to display images on Canvas

    $('#btn-feeling-one').on('click', function() {
         enthusiasticPic();
    });

    $('#btn-feeling-two').on('click', function() {
         satisfiedPic();
    });

    $('#btn-feeling-three').on('click', function() {
        uniqePic();
    });

     $('#btn-feeling-four').on('click', function() {
        peacefulPic();
    });

    $('#btn-feeling-five').on('click', function() {
        luckyPic();
    });

    $('#btn-feeling-six').on('click', function() {
        freePic();
    });

    $('#btn-feeling-seven').on('click', function() {
        confidentPic();
    });

    $('#btn-feeling-eight').on('click', function() {
        dynamicPic();
    });

    /////////////////////////SAD////////////////////////

    $('#btn-feeling-one-sad').on('click', function() {
         emptyPic();
    });

    $('#btn-feeling-two-sad').on('click', function() {
         paralyzedPic();
    });

    $('#btn-feeling-three-sad').on('click', function() {
        badPic();
    });

     $('#btn-feeling-four-sad').on('click', function() {
        paralyzedPic();
    });

    $('#btn-feeling-five-sad').on('click', function() {
        anxiousPic();
    });

    $('#btn-feeling-six-sad').on('click', function() {
        heartbrokenPic();
    });

    $('#btn-feeling-seven-sad').on('click', function() {
        panicPic();
    });

    $('#btn-feeling-eight-sad').on('click', function() {
        rejectedPic();
    });
};

});