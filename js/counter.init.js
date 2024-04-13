! function($) {
    "use strict";

    let KobicypherApp = function() {};

    //scroll

    KobicypherApp.prototype.initCounter = function() {
        let a = 0;
        $(window).scroll(function() {
            let oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                    let $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                            countNum: countTo
                        },

                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }
        });
    },

    KobicypherApp.prototype.init = function() {
        this.initCounter();
    },
    //init
    $.KobicypherApp = new KobicypherApp, $.KobicypherApp.Constructor = KobicypherApp
}(window.jQuery),

//initializing
function($) {
    "use strict";

    $.KobicypherApp.init();
}(window.jQuery);
