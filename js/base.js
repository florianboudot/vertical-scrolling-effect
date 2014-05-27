/*  =CONSTANTES
----------------------------------------------------------------------------- */
var d = document;
var w = window;
pm = {};


/* WINDOW.ONLOAD */
$(d).ready(function(){

    // call functions
    pm.verticalScrollingEffect();
});


EasingFunctions = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t*t },
    // decelerating to zero velocity
    easeOutQuad: function (t) { return t*(2-t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    // accelerating from zero velocity
    easeInCubic: function (t) { return t*t*t },
    // decelerating to zero velocity
    easeOutCubic: function (t) { return (--t)*t*t+1 },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    // accelerating from zero velocity
    easeInQuart: function (t) { return t*t*t*t },
    // decelerating to zero velocity
    easeOutQuart: function (t) { return 1-(--t)*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    // accelerating from zero velocity
    easeInQuint: function (t) { return t*t*t*t*t },
    // decelerating to zero velocity
    easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
};

/*  =EXAMPLE
----------------------------------------------------------------------------- */
pm.verticalScrollingEffect = function() {
    // elements
    var $columns = $('.column');
    var $body = $('body');
    var $columns_container = $('.columns-container');
    var $window = $(w);

    // values
    var factor = 2;
    var transform = {
        scale: 0,
        translate_y: 0
    };
    var viewport_height, body_height, viewport_width, screen_half;
    var setValues = function () {
        viewport_height = $window.height();
        body_height = $body.height();
        viewport_width = $window.width();
        screen_half = viewport_width / 2;

        // init columns height
        $columns.height((body_height * factor) - viewport_height);
    };

    // init
    setValues();

    // move layers vertically faster than the scroll
    var moveColsVertically = function () {
        transform.translate_y = -$window.scrollTop() * factor;
        $columns.css({
            'transform': 'translateY(' + transform.translate_y + 'px)'
        });
    };

    var scaleColumnsContainer = function (event) {
        // zero begins at halfscreen
        var cursor_x = (event.pageX - screen_half);
        var scale_factor = cursor_x > 0 ? ((cursor_x / screen_half)) : 0;

        scale_factor = EasingFunctions.easeInOutQuart(scale_factor)/3 + 1; // easing
//        scale_factor = (scale_factor / 3) + 1; // easing linear

        // set value to the global object
        transform.scale = scale_factor;

        $columns_container.css({
            'transform': 'scale(' + transform.scale + ')'
        });
    };


    // bind events

    $window.on('resize', setValues);
    $window.on('scroll', moveColsVertically);
    $body.on('mousemove', scaleColumnsContainer)
};











