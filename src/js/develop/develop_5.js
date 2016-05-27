

function butter(butter, navmenu) {
        butter.click(function () {
            $(this).toggleClass('active');
            if(!$(this).hasClass('active')){
                navmenu.stop().slideUp();
            }else{
                navmenu.stop().slideDown();
            }
        });
}
function buterMissClick (menuMobile,toggleMenu) {
    $(document).on('click touchstart',function (event){
        if($('header .butter-wrap').css('display') == 'block'){
            var div = toggleMenu;
            if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0)
            {
                toggleMenu.slideUp();
                menuMobile.removeClass('active');
            }
        }
    });
}


function initMap() {
    var styles = [
        {
            stylers: [

                { saturation: -50 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 50 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        streetViewControl: false,
        scaleControl: false,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        draggable: true,
        center: centerMap,
        styles: styles
    });

    var marker = new google.maps.Marker({
        position: markerPosition,
        map: map,
        icon: markerPlace
    });





}

$(document).ready(function(){
    butter($('.butter'), $('header nav'));
    buterMissClick($('.butter'), $('header nav'));
    butter($('.butter-foot'), $('footer nav'));
    buterMissClick($('.butter-foot'), $('footer nav'))
    if($('#map').length>0){
        initMap();
    }

});

$(window).load(function(){

});

$(window).resize(function() {
    if ($('header .butter-wrap').css('display') == 'none') {
        $('nav').removeAttr('style');
    }else{
        $('.butter').removeClass('active');
        $('.butter-foot').removeClass('active');
    }
});