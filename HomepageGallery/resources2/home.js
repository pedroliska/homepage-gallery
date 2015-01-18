
var untouchedImage;

// http://stackoverflow.com/questions/4467539/javascript-modulo-not-behaving
Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
}


$(document).ready(function () {


    loadImage();

    $('#canvas').click(function () {
        loadImage();
    });

    $('#image').load(function () {
        //alert('image loaded ' + $('#image').attr('src') + ' ' + $('#image').outerHeight());
        VerticalAdjust();
        // remove the display:none
        $('#image').css('display', '');
    });

    $('#canvas').hover(
        function () {
            $('#next').show();
        },
        function () {
            $('#next').hide();
        });


        $(document).keydown(function (e) {
        switch (e.keyCode) {
            case 37:
                // right arrow
                loadImage(false);
                break;
            case 39:
                // left arrow
                loadImage();
                break;
        }
    });

});

$(window).resize(function () {
    VerticalAdjust();

});

function loadImage(next) {

    next = typeof next !== 'undefined' ? next : true;

    // Get image's true size
    untouchedImage = new Image();
    untouchedImage.onload = function () {
        // setting the src will call VerticalAdjust through the 
        // load event
        $('#image').attr('src', images[imageIndex.mod(images.length)]);
    }
    if (next) {
        imageIndex++;
    } else {
        imageIndex--;
    }

    // console.log("fetching index " + imageIndex);
    // console.log("moded index " + imageIndex.mod(images.length));
    untouchedImage.src = images[imageIndex.mod(images.length)];
}

// Sets the width and height of the image tag and vertically
// aligns it
function VerticalAdjust() {

    var maxWidth = 1000;
    var maxHeight = 850;

    var minWidth = 450;
    var minHeight = 500;

    var origWidth = untouchedImage.width;
    var origHeight = untouchedImage.height;

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var canvasMaxWidth = (maxWidth > windowWidth) ? windowWidth : maxWidth;
    var canvasMaxHeight = (maxHeight > windowHeight) ? windowHeight : maxHeight;


    // ---------------------------
    // -- now deal with fitting the image
    // ---------------------------
    var canvasWidth;
    var canvasHeight;
    if (origWidth <= canvasMaxWidth && origHeight <= canvasMaxHeight) {

        // the image does not go out of the max canvas, make the canvas
        // be the size of the image.
        canvasWidth = origWidth;
        canvasHeight = origHeight;

    } else {

        // the image goes out of the max canvas, resize the image and canvas. Both
        // sizes are the same.


        var ratio;
        // determine restricting dimension
        if ((origWidth / origHeight) > (canvasMaxWidth / canvasMaxHeight)) {
            // width is the restricting dimension
            ratio = canvasMaxWidth / origWidth;
            canvasWidth = ratio * origWidth;
            if (canvasWidth < minWidth) {
                ratio = minWidth / origWidth;
                canvasWidth = ratio * origWidth;
            }
            canvasHeight = ratio * origHeight;
        } else {
            // height is the restricting dimension
            ratio = canvasMaxHeight / origHeight;
            canvasHeight = ratio * origHeight;
            if (canvasHeight < minHeight) {
                ratio = minHeight / origHeight;
                canvasHeight = ratio * origHeight;
            }
            canvasWidth = ratio * origWidth;
        }

    }

    $('#canvas,#image').css({
        'width': canvasWidth + 'px',
        'height': canvasHeight + 'px'
    });

    // ---------------------------
    // -- do the vertical align
    // ---------------------------
    $('#canvas').css({
        top: ($(window).height() - canvasHeight) / 2
    });



}

