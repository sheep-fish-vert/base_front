function mainPageSlider(){
    $('.index_block_1_slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}

function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}


function miniCalculator(){
    var firstI = $('#first_input');
    var lastI = $('#last_input');

    firstI.keyup(function(event) {
        var that = $(this);
        lastI.val( Math.ceil( parseFloat( that.val()*coefCalculator ) ) );
    });
    lastI.keyup(function(event) {
        var that = $(this);
        firstI.val( Math.ceil( parseFloat( that.val()/coefCalculator ) ) );
    });
}




$(document).ready(function(){
    miniCalculator();
    mainPageSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});
