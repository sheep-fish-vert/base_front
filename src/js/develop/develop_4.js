function mainPageSlider(){
    $('.index_block_1_slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}


$(document).ready(function(){
    mainPageSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});
