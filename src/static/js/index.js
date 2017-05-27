$(function() {
    let minimize = false;
    let remove = false;
    function flickerControl() {
        remove = !remove;
        if (remove) {
            $("#flicker").addClass("remove-flicker");
        }
        else {
            $("#flicker").removeClass("remove-flicker");
        }
    }
    setInterval(flickerControl, 500);
    function collapse() {
        if ($(window).width() <= 677) {
            $("#col-button").removeClass("collapse");
        }
        else {
            $("#col-button").addClass("collapse");
        }
    };
    collapse();
    $(window).resize(function() {
        collapse();
    }) 
    $("#col-button").click(function() {
        minimize = !minimize;
        if (minimize) {
            $("#col-button").text("Minimize");
        }
        else {
            $("#col-button").text("Menu");
        }
        $(".menu").toggleClass("nav-link-expand");
    });
});

