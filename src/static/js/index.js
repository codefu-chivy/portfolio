$(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() >= 60) {
            $("nav").addClass("navbar-fix");
        }
        else if ($(window).scrollTop() === 0) {
            $("nav").removeClass("navbar-fix");
        }
    })

});