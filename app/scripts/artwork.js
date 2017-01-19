$(document).ready(function(){

// The function gets called when the window is fully loaded
window.onload = function() {
    // Get the canvas and context
    var canvas = document.getElementById("canvas"); 
    var context = canvas.getContext("2d");
    var initialized = false;
    
    canvas.width = 400;
    canvas.height = 500;
    
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
    
    // Images
    var images = [];
    var imagesFree = [];
    var imagesSatisfied = [];
    var imagesUnique = [];
    var imagesPeaceful = [];
    var imagesLucky = [];
    var imagesConfident = [];
    var imagesDynamic = [];
    
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

    // Initialize the game
    function enthusiasticPic() {
        // Load images
        images = loadImages(["images/happyimages/enthusiastic1.png", "images/happyimages/enthusiastic2.png", "images/happyimages/enthusiastic3.png", "images/happyimages/enthusiastic4.png", "images/happyimages/enthusiastic5.png"]);
        
       // Create random entities
       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * images.length);
            var scale = randRange(150, 150);
            //var imageindex = i % images.length;
            var entity = new Entity(images[random], 0, 0, scale, scale,randRange(100, 100));
            
            // Set a random position
            // var entity = new Entity(images[imageindex], 0, 0, scale, scale,randRange(100, 100));
 
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);
            
            // Add to the entities array
            entities.push(entity);
        }
    
        // Enter main loop
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
        // Load images
        imagesFree = loadImages(["images/happyimages/free1.png", "images/happyimages/free2.png", "images/happyimages/free3.png", "images/happyimages/free4.png", "images/happyimages/free5.png"]);
       // Create random entities
       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesFree.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesFree[random], 0, 0, scale, scale,randRange(100, 100));
       
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);
            entities.push(entity);
        }
    
        // Enter main loop
        main(0);
    }

    function confidentPic() {
        // Load images
        imagesConfident = loadImages(["images/happyimages/confident1.png", "images/happyimages/confident2.png", "images/happyimages/confident3.png", "images/happyimages/confident4.png", "images/happyimages/confident5.png"]);
       // Create random entities
       for (var i=0; i < 1; i++) {
            var random = Math.floor(Math.random() * imagesConfident.length);
            var scale = randRange(150, 150);
            var entity = new Entity(imagesConfident[random], 0, 0, scale, scale,randRange(100, 100));
       
            entity.x = randRange(0, level.width-entity.width);
            entity.y = randRange(0, level.height-entity.height);
            entities.push(entity);
        }
    
        // Enter main loop
        main(0);
    }

    function dynamicPic() {
        // Load images
        imagesDynamic = loadImages(["images/happyimages/dynamic1.png", "images/happyimages/dynamic2.png", "images/happyimages/dynamic3.png", "images/happyimages/dynamic4.png", "images/happyimages/dynamic5.png"]);
       // Create random entities
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
            // Update and render the game
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


    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById('canvas').toDataURL();
        link.download = filename;
    }

    document.getElementById('download').addEventListener('click', function() {
        downloadCanvas(this, 'canvas', 'test.png');
    }, false);


    
    // Call init to start the game
   

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
};

});