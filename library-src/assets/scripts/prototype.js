$(function() {
    // Prototype: Carousel Lazy Loading
    $('.js-slick-hero').slick({
        //dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        //autoplay: true,
        //autoplaySpeed: 8000,
        fade: true,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        onAfterChange: function(event, slick, currentSlide){ 
            //ga('send', 'event', 'Hero Image Interaction');
            // picturefill({ 
            //     reevaluate: true 
            // });
        }
    });

      $('.js-slick-hero--lazy').slick({
        speed: 400,
        slidesToShow: 1,
        lazyLoad: 'ondemand'
    });

    // $('.lazy').lazyload({
    //     //container: $('#container'),
    //     container: $('.hero__image'),
    //     effect: "fadeIn",
    //     skip_invisible: true
    // });

    // $('.js-slick-hero').on('afterChange', function(event, slick, currentSlide){ 
    //     picturefill({ reevaluate: true }); 
    //     console.log('change')
    // });

    window.lazySizesConfig = window.lazySizesConfig || {
        expand: "0"
    };

});