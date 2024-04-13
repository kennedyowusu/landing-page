! function($) {
    "use strict";

    let KobicypherApp = function() {};

    //scroll
    KobicypherApp.prototype.initNavbarStickey = function() {
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $(".sticky").addClass("darkheader");
            } else {
                $(".sticky").removeClass("darkheader");
            }
        });
    },

    KobicypherApp.prototype.initSmoothLink = function() {
        $('.navigation-menu a').on('click', function(event) {
            let $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    KobicypherApp.prototype.initNavbarToggler = function() {
        let scroll = $(window).scrollTop();
        $('.navbar-toggle').on('click', function(event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });
        $('.navigation-menu>li').slice(-2).addClass('last-elements');
    },

    KobicypherApp.prototype.initTestimonialSlider = function() {
        $("#owl-demo").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },

    KobicypherApp.prototype.initPreloader = function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
        'overflow': 'visible'
        });
    },

    KobicypherApp.prototype.initScrollspy = function() {
        $("#navigation").scrollspy({ offset: 70 });
    },

    KobicypherApp.prototype.initMagnificPopup = function() {
        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
                    // Will preload 0 - before current, and 1 after the current image
            }
        });
    },

    KobicypherApp.prototype.initPortfolioFilter = function() {
        //PORTFOLIO FILTER
        let $container = $('.projects-wrapper');
        let $filter = $('#filter');
        // Initialize isotope
        $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
                duration: 750,
                easing: 'linear'
            }
        });
        // Filter items when filter link is clicked
        $filter.find('a').click(function() {
            let selector = $(this).attr('data-filter');
            $filter.find('a').removeClass('active');
            $(this).addClass('active');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    animationDuration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
    },

    KobicypherApp.prototype.initClientSlider = function() {
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
    },

    KobicypherApp.prototype.initMagnificVideo = function() {
        $('.video-play-icon').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },

    KobicypherApp.prototype.init = function() {
        this.initNavbarStickey();
        this.initSmoothLink();
        this.initNavbarToggler();
        this.initTestimonialSlider();
        this.initPreloader();
        this.initScrollspy();
        this.initMagnificPopup();
        this.initPortfolioFilter();
        this.initClientSlider();
        this.initMagnificVideo();
    },

    //init
    $.KobicypherApp = new KobicypherApp, $.KobicypherApp.Constructor = KobicypherApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.KobicypherApp.init();
}(window.jQuery);
