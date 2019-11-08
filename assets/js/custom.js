(function($) {
$(document).ready(function(){
    //mobile menu custom js
    $(".mobile-menu-btn").on("click", function () {
        $('ul.mobile-menu').css({
            'right': '0',
            'opacity': '1',
            'transition': 'all .5s',
        });
    });
    $("#close").on("click", function () {
        $('ul.mobile-menu').css({
            'right': '-100%',
            'opacity': '0',
            'transition': 'all .8s',
        });
    });
    $("ul.mobile-menu li a").on("click", function () {
        $('ul.mobile-menu').css({
            'right': '-100%',
            'opacity': '0',
            'transition': 'all .8s',
        });
    });

    /*topbar sticky on scroll*/
    $(window).on('scroll',function() {
        //sticky menu when scroll
        var scroll = $(window).scrollTop();
        if (scroll < 0.01) {
            $(".header-section").removeClass("sticky_top");
        }else{
            $(".header-section").addClass("sticky_top");
        }
    });


    //hero slider
    $('#slider').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop:true,
        margin:10,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass:true,
        nav:false,
        dots:false,
        mouseDrag:false,
        touchDrag: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1,
                loop:true
            }
        }
    });
    //slider animation
    $('#slider').on('translate.owl.carousel',function () {
        $('.cont-style h1, .cont-style h5, .slide-logo img').removeClass('animated fadeInUp').css('opacity','0');
    });
    $('#slider').on('translated.owl.carousel',function () {
        $('.cont-style h1, .cont-style h5, .slide-logo img').addClass('animated fadeInUp').css('opacity','0');
    });




    //WoW js activation
    //new WOW().init();

    //responsive slick nav menu activation
    /*$('#nav').slicknav({
        prependTo:'.responsive-mobile-menu',
    });*/

    // magnific popup activation
    $('.single-gallery-item').magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    //back to top show when scroll
    /*$(".back_to_top i.fa").css("display", "none");
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".back_to_top i.fa").css("display", "none");
        } else {
            $(".back_to_top i.fa").css("display", "block");
        }
    });
    $(".back_to_top i.fa").on("click",function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });*/

});
})( jQuery );