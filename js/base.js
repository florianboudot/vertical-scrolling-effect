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


/*  =EXAMPLE
----------------------------------------------------------------------------- */
pm.verticalScrollingEffect = function() {

    // elements
    var $columns = $('.column');
    var $body = $('body');
    var $columns_container = $('.columns-container');
    var $window = $(w);

    // values
    var viewport_height = $window.height();
    var body_height = $body.height();
    var viewport_width = $window.width();
    var screen_half = viewport_width / 2;
    var factor = 2;
    var transform = {
        scale: 0,
        translate_y: 0
    };

    // init columns height
    $columns.height((body_height * factor) - viewport_height);

    // move layers vertically faster than the scroll
    var translateY = function () {
        transform.translate_y = -$window.scrollTop() * factor;
        $columns.css({
            'transform': 'translateY(' + transform.translate_y + 'px)'
        });
    };

    var scaleColumns = function (event) {

        // zero begins at halfscreen
        var cursor_x = (event.pageX - screen_half);
        var scale_factor = cursor_x > 0 ? ((cursor_x / screen_half)) : 0;

        scale_factor = (scale_factor / 3) + 1; // linear

        // set value to the global object
        transform.scale = scale_factor;

        $columns_container.css({
            'transform': 'scale(' + transform.scale + ')'
        });
    };


    // bind events
    $window.on('scroll', translateY);
    $body.on('mousemove', scaleColumns)
};











