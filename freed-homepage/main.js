$(document).ready(function() {
    
    $(".more").hide();

    $(".academics").click(function() {
        if($(".more-academics").is(":visible")) {
            $(".more-academics").fadeToggle(500);
        }
        else {
            // hide all open anwer divs
            $(".more").hide();

            // show the next answer div
            $(".more-academics").fadeToggle(500);
        }
    });

    $(".family").click(function() {
        if($(".more-family").is(":visible")) {
            $(".more-family").fadeToggle(500);
        }
        else {
            // hide all open anwer divs
            $(".more").hide();

            // show the next answer div
            $(".more-family").fadeToggle(500);
        }
    });

    $(".christianity").click(function() {
        if($(".more-christianity").is(":visible")) {
            $(".more-christianity").fadeToggle(500);
        }
        else {
            // hide all open anwer divs
            $(".more").hide();

            // show the next answer div
            $(".more-christianity").fadeToggle(500);
        }
    });

    $(".close").click(function() {
        if($(this).is(":visible")) {
            $(".more-academics").hide()
            $(".more-family").hide();
            $(".more-christianity").hide();
        }
    });

    // $(".value").click(function() {

    //     if($(this).next().is(":visible")) {
    //         $(this).next().fadeToggle(500);
    //     }
    //     else {
    //         // hide all open anwer divs
    //         $(".more").hide();

    //         // show the next answer div
    //         $(this).next().fadeToggle(500);
    //     }
    // });

});