/*------------------------------------------------------------------------------
    JS Document (https://developer.mozilla.org/en/JavaScript)

    project:    Project
    created:    YYYY-MM-DD
    author:     johdoe
    
----------------------------------------------------------------------------- */


/*  =CONSTANTES
----------------------------------------------------------------------------- */
var d = document;
var w = window;
pm = {};



/*  =WINDOW.ONLOAD
----------------------------------------------------------------------------- */
$(d).ready(function(){

    // call functions
    pm.example();                 // just an example


});


/*  =EXAMPLE
----------------------------------------------------------------------------- */
pm.example = function() {
    var $columns = $('.column');
    var $body = $('body');
    var $window = $(w);
    var viewport_height = $window.height();
    var body_height = $body.height();
    var factor = 2;

    // init column height
    $columns.height((body_height * factor) - viewport_height);

    $window.scroll(function(){
        $columns.css({
            'transform': 'translate3d(0,' + (- $window.scrollTop() * factor) + 'px, 0)'
        });

    });
};











