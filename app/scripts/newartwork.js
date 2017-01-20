    
    var imagesenthusiastic = ["images/happyimages/enthusiastic1.png", "images/happyimages/enthusiastic2.png", "images/happyimages/enthusiastic3.png", "images/happyimages/enthusiastic4.png", "images/happyimages/enthusiastic5.png"],
    imagesFree = ["images/happyimages/free1.png", "images/happyimages/free2.png", "images/happyimages/free3.png", "images/happyimages/free4.png", "images/happyimages/free5.png"],
    imagesSatisfied = ["images/happyimages/satisfied1.png", "images/happyimages/satisfied2.png", "images/happyimages/satisfied3.png"],
    imagesUnique = ["images/happyimages/unique1.png", "images/happyimages/unique2.png", "images/happyimages/unique3.png", "images/happyimages/unique4.png", "images/happyimages/unique5.png"],
    imagesPeaceful = ["images/happyimages/peaceful1.png", "images/happyimages/peaceful2.png", "images/happyimages/peaceful3.png", "images/happyimages/peaceful4.png", "images/happyimages/peaceful5.png", "images/happyimages/peaceful6.png"],
    imagesLucky = ["images/happyimages/lucky1.png", "images/happyimages/lucky2.png", "images/happyimages/lucky3.png", "images/happyimages/lucky4.png", "images/happyimages/lucky5.png"],
    imagesConfident = ["images/happyimages/confident1.png", "images/happyimages/confident2.png", "images/happyimages/confident3.png", "images/happyimages/confident4.png", "images/happyimages/confident5.png"],
    imagesDynamic = ["images/happyimages/dynamic1.png", "images/happyimages/dynamic2.png", "images/happyimages/dynamic3.png", "images/happyimages/dynamic4.png", "images/happyimages/dynamic5.png"],
    imagesEmpty = ["images/happyimages/empty1.png", "images/happyimages/empty2.png", "images/happyimages/empty3.png","images/happyimages/empty4.png", "images/happyimages/empty5.png"],
    imagesDepressed = ["images/happyimages/depressed1.png", "images/happyimages/depressed2.png", "images/happyimages/depressed3.png","images/happyimages/depressed4.png", "images/happyimages/depressed5.png"],
    imagesBad = ["images/happyimages/bad1.png", "images/happyimages/bad2.png", "images/happyimages/bad3.png","images/happyimages/bad4.png", "images/happyimages/bad5.png"],
    imagesParalyzed = ["images/happyimages/paralyzed1.png", "images/happyimages/paralyzed2.png", "images/happyimages/paralyzed3.png","images/happyimages/paralyzed4.png", "images/happyimages/paralyzed5.png"],
    imagesAnxious = ["images/happyimages/anxious1.png", "images/happyimages/anxious2.png", "images/happyimages/anxious3.png","images/happyimages/anxious4.png", "images/happyimages/anxious5.png"],
    imagesHeartbroken = ["images/happyimages/heartbroken1.png", "images/happyimages/heartbroken2.png", "images/happyimages/heartbroken3.png","images/happyimages/heartbroken4.png", "images/happyimages/heartbroken5.png"],
    imagesPanic = ["images/happyimages/panic1.png", "images/happyimages/panic2.png", "images/happyimages/panic3.png","images/happyimages/panic4.png", "images/happyimages/panic5.png"],
    imagesRejected = ["images/happyimages/rejected1.png", "images/happyimages/rejected2.png", "images/happyimages/rejected3.png","images/happyimages/rejected4.png", "images/happyimages/rejected5.png"],
    finalArtwork = [];

  


function pickFromArray(array, number) {
    var returnArray = [];

    for (var i = array - 1; i >= 0; i--) {
        // Kolla om arrayen blir tom, breaka isf
        returnArray.push(array[(0, array.length)]);
    }

    return returnArray;
}


$('#btn-feeling-one').on('click', function() {
    finalArtwork.push(pickFromArray(imagesenthusiastic));

});

console.log(returnArray);


