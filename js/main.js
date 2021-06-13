$(function(){
    // 'user strict';
    var upperBarHeight = $(".upper-bar").innerHeight(),
    navbarHeight   = $('.navbar').innerHeight(),
    windowHeigh    = $(window).height();
    

    $(".slider,.carousel-item").height(windowHeigh - upperBarHeight - navbarHeight);
});

$(".featured-work li").on("click",function(){
    $(this).addClass("active").siblings().removeClass('active');
    if ($(this).data('class')==='all'){
        $(".shuffle-image .row .col-md img").css("opacity","1");
    }
    else{
        $(".shuffle-image .row .col-md img").css("opacity",".09")
        $($(this).data('class')).css('opacity','1')
    }
})