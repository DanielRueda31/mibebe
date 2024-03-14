$(document).ready(function(){
    var carousel = $('.carousel');
    var images = $('.carousel img');
    var index = 0;
    var interval = 3000; // tiempo

    function rotateImages() {
        index = (index + 1) % images.length;
        carousel.css('transform', 'translateX(' + (-index * 110) + '%)');
    }

    setInterval(rotateImages, interval);
});