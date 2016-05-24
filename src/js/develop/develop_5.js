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


$(document).ready(function(){
    butter($('.butter'), $('header nav'));
    buterMissClick($('.butter'), $('header nav'));
    butter($('.butter-foot'), $('footer nav'));
    buterMissClick($('.butter-foot'), $('footer nav'));
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