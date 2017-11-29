$(function() {
    let minimize = false;
    let remove = false;
    let string = "I'm Chival, a web developer with a passion for coding. After graduating from university, I developed a love for web development and began learning as much as I could. From HTML and CSS to all things JavaScript, I was determined to pave my way to a new career. It's never too late to start doing what you love. Currently, my go-to tech stack is MongoDB, Express/Node, and React, and I'm excited to learn other technologies in my journey. In my spare time you can find me jamming on the piano and bass.'"
    let count = 0;
    function individual() {
        if (count >= string.length) {
            clearInterval(type);
            setInterval(flickerControl, 500);
            return;
        }
        if (string[count - 1] === "." && count !== string.length - 1) {
            setTimeout(pause, 350);
        }
        else {
            let newText = document.createTextNode(string[count]);
            document.getElementById("string").appendChild(newText);
            count++;
        }
    } 
    function pause() {
        if (count >= string.length) {
            console.log("hello");
            clearInterval(type);
            return;
        }
        let newText = document.createTextNode(string[count]);
        document.getElementById("string").appendChild(newText);
        count++;
    }
    if (document.getElementById("string")) {
        type = setInterval(individual, 60);
    }
    function flickerControl() {
        remove = !remove;
        if (remove) {
            $("#flicker").addClass("remove-flicker");
        }
        else {
            $("#flicker").removeClass("remove-flicker");
        }
    }
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

    if (!localStorage.getItem("visited")) {
        $.get("/tally-visit", function(data) {
            if (data.success) {
                localStorage.setItem("visited", "true");
            }
        });
    }
});

